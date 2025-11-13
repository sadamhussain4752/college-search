"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

type College = {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  address: string;
  approvals: string[];
  website?: string;
  streams: string[];
  rating?: number | null;
  totalCourses?: number | string;
  fee?: string | number;
  image?: string;
};

function normalize(value?: string): string {
  if (!value) return "";
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createVariants(value: string): string[] {
  const normalized = normalize(value);
  if (!normalized) return [];
  const words = normalized.split(" ");
  const title = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const upper = words.map((w) => w.toUpperCase()).join(" ");
  const hyphen = words.join("-");
  const underscore = words.join("_");
  const compact = words.join("");
  const variants = new Set<string>([
    value.trim(),
    normalized,
    title,
    upper,
    hyphen,
    underscore,
    compact,
  ]);
  return Array.from(variants).filter(Boolean);
}

const DEFAULT_IMAGE = "/build/assets/t-1709039660-chitkara-university-rajpura.jpeg";

// Helper: Gather strings recursively
function gatherStrings(val: any, depth = 0): string[] {
  if (!val || depth > 3) return [];
  if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
    return [String(val)];
  }
  if (Array.isArray(val)) {
    return val.flatMap((v) => gatherStrings(v, depth + 1));
  }
  if (typeof val === "object") {
    return Object.values(val).flatMap((v) => gatherStrings(v, depth + 1));
  }
  return [];
}

// ✅ M.Tech detection logic
function isMtechCourse(data: any): boolean {
  const categoryText = gatherStrings([
    data.category,
    data.categories,
    data.categoryName,
    data.tags,
    data.courseName,
    data.name,
  ])
    .join(" ")
    .toLowerCase();

  const levelText = gatherStrings([
    data.courseLevel,
    data.level,
    data.programLevel,
    data.degreeLevel,
  ])
    .join(" ")
    .toLowerCase();

  // PG indicators
  const pgIndicators = [
    "pg",
    "postgraduate",
    "post graduate",
    "masters",
    "master",
  ];

  const isPgLevel = pgIndicators.some((term) => levelText.includes(term));

  // M.Tech keywords
  const mtechKeywords = [
    "m.tech",
    "mtech",
    "m.e",
    "me",
    "master of technology",
    "master of engineering",
  ];
  const isMtechKeyword = mtechKeywords.some((term) => categoryText.includes(term));

  // Exclude UG/B.Tech
  const excludeKeywords = ["b.tech", "btech", "bachelor", "undergraduate", "ug"];
  const isExcluded = excludeKeywords.some(
    (term) => categoryText.includes(term) || levelText.includes(term)
  );

  return isMtechKeyword && isPgLevel && !isExcluded;
}

function collectCollegeEntries(data: any): any[] {
  const potentialArrays: any[] = [
    data.topColleges,
    data.relatedColleges,
    data.colleges,
    data.collegeList,
    data.popularColleges,
    data.featuredColleges,
    data.campuses,
    data.locations,
    data.centers,
    data.centres,
  ];
  const entries: any[] = [];
  potentialArrays.forEach((arr) => {
    if (Array.isArray(arr)) {
      arr.forEach((entry) => {
        if (entry && typeof entry === "object") entries.push(entry);
      });
    }
  });
  if (entries.length === 0) {
    entries.push(data);
  }
  return entries;
}

function extractField(entry: any, doc: any, keys: string[]): any {
  for (const key of keys) {
    if (entry && entry[key] !== undefined && entry[key] !== null && entry[key] !== "") {
      return entry[key];
    }
    if (doc && doc[key] !== undefined && doc[key] !== null && doc[key] !== "") {
      return doc[key];
    }
    if (entry?.location && entry.location[key] !== undefined) return entry.location[key];
    if (doc?.location && doc.location[key] !== undefined) return doc.location[key];
    if (entry?.address && entry.address[key] !== undefined) return entry.address[key];
    if (doc?.address && doc.address[key] !== undefined) return doc.address[key];
  }
  return undefined;
}

function combineApprovals(entry: any, doc: any): string[] {
  const approvals = new Set<string>();
  const raw = [entry?.approvals, entry?.approval, doc?.approvals, doc?.approval];
  raw.forEach((item) => {
    if (!item) return;
    if (Array.isArray(item)) {
      item.forEach((value) => approvals.add(String(value)));
    } else {
      gatherStrings(item).forEach((value) => approvals.add(value));
    }
  });
  return Array.from(approvals).filter(Boolean);
}

function combineStreams(entry: any, doc: any): string[] {
  const streams = new Set<string>();
  const raw = [entry?.streams, entry?.courses, entry?.disciplines, entry?.specialisations, doc?.streams, doc?.courses];
  raw.forEach((item) => {
    if (!item) return;
    gatherStrings(item).forEach((value) => streams.add(value));
  });
  return Array.from(streams).filter(Boolean);
}

export default function MTechExplorerPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <MTechExplorerPageContent />
    </Suspense>
  );
}

function PageSkeleton() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center py-20">
        <div className="w-10 h-10 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <Footer />
    </main>
  );
}

function MTechExplorerPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState<College[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const scope = searchParams.get("scope");
    const state = searchParams.get("state");
    const country = searchParams.get("country");
    if (state) setSelectedState(state);
    if (country) setSelectedCountry(country);
    if (!state && !country) {
      if (scope === "india") {
        setSelectedCountry("");
      } else if (scope === "abroad") {
        setSelectedState("");
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const q = query(collection(db, "courses"));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const map = new Map<string, College>();
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (!isMtechCourse(data)) return;

          const entries = collectCollegeEntries(data);
          entries.forEach((entry, idx) => {
            const name =
              entry?.name ||
              entry?.collegeName ||
              entry?.college ||
              entry?.institute ||
              entry?.university ||
              entry?.title ||
              data?.instituteName ||
              data?.universityName ||
              data?.collegeName ||
              data?.courseProvider ||
              data?.courseName ||
              "";

            if (!name) return;

            const key = name.trim().toLowerCase();
            const city =
              extractField(entry, data, ["city", "cityName"]) ||
              extractField(entry.location, data.location, ["city"]);
            const state =
              extractField(entry, data, ["state", "stateName", "province"]) ||
              extractField(entry.location, data.location, ["state"]);
            const country =
              extractField(entry, data, ["country", "countryName", "nation"]) ||
              extractField(entry.location, data.location, ["country"]);
            const address =
              extractField(entry, data, ["address", "addressLine", "streetAddress", "fullAddress", "location"]) || "";
            const approvals = combineApprovals(entry, data);
            const streams = combineStreams(entry, data);
            const ratingRaw = extractField(entry, data, ["rating", "overallRating", "score"]);
            const rating = ratingRaw !== undefined && !Number.isNaN(Number(ratingRaw)) ? Number(ratingRaw) : null;
            const totalCourses =
              extractField(entry, data, ["totalCourses", "noOfCourses", "coursesCount", "programCount", "count"]);
            const fee =
              extractField(entry, data, [
                "totalFees",
                "fee",
                "fees",
                "package",
                "avgFee",
                "averageFee",
                "tuition",
                "courseFee",
              ]);
            const rawWebsite = extractField(entry, data, ["website", "url", "link", "applyUrl"]);
            const website = Array.isArray(rawWebsite)
              ? rawWebsite.map((w) => String(w)).find((w) => w.trim())
              : typeof rawWebsite === "string"
              ? rawWebsite.trim()
              : undefined;
            const image = extractField(entry, data, ["image", "logo", "banner", "thumbnail"]);

            const existing = map.get(key);
            const merged: College = {
              id: `${doc.id}-${idx}`,
              name,
              city: city ? String(city) : existing?.city || "",
              state: state ? String(state) : existing?.state || "",
              country: country ? String(country) : existing?.country || "India",
              address: address ? String(address) : existing?.address || "",
              approvals: approvals.length > 0 ? approvals : existing?.approvals || [],
              website: website || existing?.website,
              streams: streams.length > 0 ? streams : existing?.streams || [],
              rating: rating !== null ? rating : existing?.rating,
              totalCourses: totalCourses || existing?.totalCourses,
              fee: fee || existing?.fee,
              image: image || existing?.image,
            };

            map.set(key, merged);
          });
        });
        const list = Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
        setColleges(list);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching M.Tech colleges:", error);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  // --- UI Filtering Logic ---
  const states = useMemo(() => {
    const filtered = colleges.filter((c) => normalize(c.country) === "india" && c.state);
    return Array.from(new Set(filtered.map((c) => c.state).filter(Boolean))).sort((a, b) => a.localeCompare(b));
  }, [colleges]);

  const countries = useMemo(() => {
    const filtered = colleges.filter((c) => normalize(c.country) !== "india" && c.country);
    return Array.from(new Set(filtered.map((c) => c.country).filter(Boolean))).sort((a, b) => a.localeCompare(b));
  }, [colleges]);

  const filteredColleges = useMemo(() => {
    const normSearch = normalize(searchTerm);
    return colleges.filter((college) => {
      const isIndia = normalize(college.country) === "india";
      if (selectedCountry) {
        const variants = createVariants(selectedCountry);
        const collegeCountryVariants = createVariants(college.country);
        const match =
          variants.some((v) => collegeCountryVariants.includes(v)) ||
          collegeCountryVariants.some((v) => variants.includes(v));
        if (!match) return false;
      }
      if (selectedState) {
        const variants = createVariants(selectedState);
        const collegeStateVariants = createVariants(college.state);
        const match =
          variants.some((v) => collegeStateVariants.includes(v)) ||
          collegeStateVariants.some((v) => variants.includes(v));
        if (!match) return false;
        if (!isIndia) return false;
      }

      if (normSearch) {
        const haystack = [
          college.name,
          college.city,
          college.state,
          college.country,
          college.address,
          ...(college.approvals || []),
          ...(college.streams || []),
        ]
          .filter(Boolean)
          .map((value) => normalize(value));
        if (!haystack.some((value) => value.includes(normSearch))) return false;
      }
      return true;
    });
  }, [colleges, selectedState, selectedCountry, searchTerm]);

  const groupedByState = useMemo(() => {
    const map = new Map<string, { state: string; country: string; colleges: College[] }>();
    filteredColleges.forEach((college) => {
      const stateKey = college.state || (normalize(college.country) === "india" ? "Unknown" : college.country) || "Other";
      const countryLabel = college.country || "India";
      if (!map.has(stateKey)) {
        map.set(stateKey, { state: stateKey, country: countryLabel, colleges: [] });
      }
      map.get(stateKey)!.colleges.push(college);
    });
    return Array.from(map.values()).sort((a, b) => a.state.localeCompare(b.state));
  }, [filteredColleges]);

  const handleSelectState = (state: string) => {
    const newState = state === selectedState ? "" : state;
    setSelectedState(newState);
    setSelectedCountry("");
    const params = new URLSearchParams();
    if (newState) params.set("state", newState);
    const queryString = params.toString();
    router.replace(`/course/mtech.html${queryString ? `?${queryString}` : ""}`, { scroll: true });
  };

  const handleSelectCountry = (country: string) => {
    const newCountry = country === selectedCountry ? "" : country;
    setSelectedCountry(newCountry);
    setSelectedState("");
    const params = new URLSearchParams();
    if (newCountry) params.set("country", newCountry);
    const queryString = params.toString();
    router.replace(`/course/mtech.html${queryString ? `?${queryString}` : ""}`, { scroll: true });
  };

  // --- RENDER ---
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-10 space-y-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">M.Tech / M.E. Colleges Explorer</h1>
            <p className="text-gray-600 mt-1">
              Pick a state or country to explore M.Tech colleges. The list updates automatically from your
              Firestore courses collection.
            </p>
          </div>
        </div>

        {/* Popular Courses */}
        <div className="popularCollegeSearch" style={{ marginTop: '24px' }}>
          <p style={{ fontSize: '12px', fontWeight: 400, marginBottom: '8px' }}>Popular Courses</p>
          <div className="pop_clg_link" style={{ display: 'flex', gap: '5px 20px', flexWrap: 'wrap' }}>
            <a href="/course/mbbs.html" style={{ fontSize: '12px', fontWeight: 700, color: '#a03318' }}>MBBS</a>
          </div>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search colleges, location, approvals, streams…"
              className="flex-1 min-w-[220px] border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-700"
            />
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedState("");
                setSelectedCountry("");
                router.replace("/course/mtech.html", { scroll: true });
              }}
              className="px-4 py-2 rounded-full border text-sm text-gray-600 hover:border-red-700 hover:text-red-700"
            >
              Reset Filters
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">States in India</h2>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                {states.length === 0 ? (
                  <span className="text-sm text-gray-400">No states detected yet.</span>
                ) : (
                  states.map((state) => (
                    <button
                      key={state}
                      type="button"
                      onClick={() => handleSelectState(state)}
                      className={`px-4 py-2 rounded-full border text-sm transition ${
                        selectedState === state
                          ? "bg-red-700 text-white border-red-700"
                          : "border-gray-300 text-gray-700 hover:border-red-700 hover:text-red-700"
                      }`}
                    >
                      {state}
                    </button>
                  ))
                )}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Countries</h2>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                {countries.length === 0 ? (
                  <span className="text-sm text-gray-400">No countries detected.</span>
                ) : (
                  countries.map((country) => (
                    <button
                      key={country}
                      type="button"
                      onClick={() => handleSelectCountry(country)}
                      className={`px-4 py-2 rounded-full border text-sm transition ${
                        selectedCountry === country
                          ? "bg-red-700 text-white border-red-700"
                          : "border-gray-300 text-gray-700 hover:border-red-700 hover:text-red-700"
                      }`}
                    >
                      {country}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {selectedState
                ? `M.Tech Colleges in ${selectedState}`
                : selectedCountry
                ? `M.Tech Colleges in ${selectedCountry}`
                : "All M.Tech Colleges"}
            </h2>
            <span className="text-sm text-gray-500">
              {loading ? "Loading…" : `${filteredColleges.length} college(s)`}
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredColleges.length === 0 ? (
            <div className="px-6 py-10 text-center text-gray-600">
              No colleges match the current filters.
            </div>
          ) : (
            <div className="px-4 md:px-6 py-6 space-y-8">
              {groupedByState.map((group) => (
                <div key={`${group.state}-${group.country}`} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{group.state}</h3>
                      <p className="text-xs text-gray-500">{group.country}</p>
                    </div>
                    <span className="text-xs text-gray-400">{group.colleges.length} college(s)</span>
                  </div>
                  <div className="divide-y">
                    {group.colleges.map((college, idx) => (
                      <div key={`${college.id}-${idx}`} className="flex flex-col md:flex-row">
                        <div className="md:w-56 lg:w-64 h-40 md:h-auto relative bg-gray-100">
                          <Image
                            src={college.image || DEFAULT_IMAGE}
                            alt={college.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 280px"
                          />
                        </div>
                        <div className="flex-1 p-5 space-y-3">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                            <div>
                              <h4 className="text-base md:text-lg font-semibold text-gray-900">
                                {college.name}
                              </h4>
                              <div className="text-sm text-gray-500">
                                {college.address ||
                                  [college.city, college.state].filter(Boolean).join(", ") ||
                                  "—"}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{college.country}</div>
                            </div>
                            <div className="flex flex-col items-start text-xs text-gray-600 gap-1">
                              {college.rating !== undefined && college.rating !== null && (
                                <div>
                                  <span className="font-semibold text-gray-900">{college.rating.toFixed(2)}</span>{" "}
                                  Rating
                                </div>
                              )}
                              {college.totalCourses && <div>{college.totalCourses} Courses</div>}
                              {college.fee && (
                                <div className="text-red-700 font-medium text-sm">
                                  {typeof college.fee === "number" ? `₹${college.fee}` : String(college.fee)}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                            <div>
                              <p className="font-semibold text-gray-900 mb-1">Location</p>
                              <p>{[college.city, college.state].filter(Boolean).join(", ") || "—"}</p>
                              <p className="text-xs text-gray-500">{college.country}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 mb-1">Streams / Tags</p>
                              <div className="flex flex-wrap gap-1">
                                {college.streams.length > 0 ? (
                                  college.streams.slice(0, 6).map((stream, streamIdx) => (
                                    <span
                                      key={`${college.id}-stream-${streamIdx}`}
                                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-xs"
                                    >
                                      {stream}
                                    </span>
                                  ))
                                ) : (
                                  <span className="text-xs text-gray-400">—</span>
                                )}
                                {college.streams.length > 6 && (
                                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full border border-gray-200 text-xs">
                                    +{college.streams.length - 6} more
                                  </span>
                                )}
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 mb-1">Approvals</p>
                              <p className="text-xs text-gray-600">
                                {college.approvals.length > 0 ? college.approvals.join(" | ") : "—"}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
                            <div className="text-xs text-gray-500">
                              Data sourced in real time from your Firestore courses.
                            </div>
                            {college.website ? (
                              <a
                                href={college.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-red-700 hover:underline"
                              >
                                Visit Site
                              </a>
                            ) : (
                              <span className="text-xs text-gray-400">No website available</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}