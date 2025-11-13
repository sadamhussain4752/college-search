"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import Image from "next/image";

type College = {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  address: string;
  approval: string[];
  website?: string;
  streams: string[];
  raw: any;
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

const MBBS_KEYWORDS = [
  "mbbs",
  "m.b.b.s",
  "m.b.b.s.",
  "bachelor of medicine",
  "bachelor of surgery",
  "medicine and surgery",
  "bachelor of medicine and bachelor of surgery",
  "medical degree",
  "medical course",
  "medical program",
];

const MEDICAL_COLLEGE_KEYWORDS = [
  "medical college",
  "medical university",
  "medical institute",
  "medical school",
  "college of medicine",
  "school of medicine",
  "institute of medical",
  "medicine",
];

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

function isMbbsCollege(data: any): boolean {
  const textFields = [
    data.course,
    data.stream,
    data.branch,
    data.program,
    data.discipline,
    data.courseType,
    data.category,
    data.collegeCategory,
    data.collegeType,
    data.institutionType,
    data.collegeName,
    data.name,
    data.description,
    data.about,
    data.overview,
    data.admissionEligibility,
    data.eligibility,
    data.admissionProcess,
    data.address,
    data.location,
    ...gatherStrings(data.tags),
    ...gatherStrings(data.courses),
    ...gatherStrings(data.coursesOffered),
    ...gatherStrings(data.programs),
    ...gatherStrings(data.ugPrograms),
    ...gatherStrings(data.pgPrograms),
    ...gatherStrings(data.departments),
    ...gatherStrings(data.offerings),
    ...gatherStrings(data.specializations),
    ...gatherStrings(data.faculties),
    ...gatherStrings(data.medicalCourses),
    ...gatherStrings(data.medicalPrograms),
    ...gatherStrings(data.degreePrograms),
  ]
    .filter(Boolean)
    .map((v) => String(v).toLowerCase());

  const hasMbbsKeyword = textFields.some((t) => MBBS_KEYWORDS.some((k) => t.includes(k)));

  const collegeName = String(data.collegeName || data.name || "").toLowerCase();
  const isMedicalCollege = MEDICAL_COLLEGE_KEYWORDS.some((k) => collegeName.includes(k));

  const streamsArray = Array.isArray(data.streams) ? data.streams : [];
  const hasMbbsInStreams = streamsArray.some((s: any) => {
    const str = String(s).toLowerCase();
    return str.includes("mbbs") || str.includes("medicine");
  });

  return hasMbbsKeyword || isMedicalCollege || hasMbbsInStreams;
}

function extractCity(data: any): string {
  return (
    data.city ||
    data.cityName ||
    data?.location?.city ||
    data?.address?.city ||
    data?.addressCity ||
    ""
  );
}

function extractCountry(data: any): string {
  return (
    data.country ||
    data.countryName ||
    data?.location?.country ||
    data?.address?.country ||
    data?.addressCountry ||
    ""
  );
}

export default function MbbsExplorerPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <MbbsExplorerPageContent />
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

function MbbsExplorerPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState<College[]>([]);
  const [selectedTab, setSelectedTab] = useState<"india" | "abroad">("india");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const tab = searchParams.get("scope") as "india" | "abroad" | null;
    const city = searchParams.get("city");
    const country = searchParams.get("country");
    if (tab) setSelectedTab(tab);
    if (city) setSelectedCity(city);
    if (country) setSelectedCountry(country);
  }, [searchParams]);

  useEffect(() => {
    const collegesRef = collection(db, "colleges");
    const q = query(collegesRef);
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const list: College[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (!isMbbsCollege(data)) return;

          const city = extractCity(data);
          const country = extractCountry(data);

          list.push({
            id: doc.id,
            name: data.name || data.collegeName || "Unnamed College",
            city,
            state: data.state || data?.location?.state || "",
            country,
            address:
              data.addressLine || data.address || data?.location?.address || data?.address?.street || "",
            approval: Array.isArray(data.approval)
              ? data.approval
              : data.approval
              ? [data.approval]
              : [],
            website: data.website || data.url || data?.links?.website,
            streams: Array.isArray(data.streams) ? data.streams : [],
            raw: data,
          });
        });
        setColleges(list.sort((a, b) => a.name.localeCompare(b.name)));
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching colleges:", error);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  const cities = useMemo(() => {
    const filtered = colleges.filter((c) => normalize(c.country) === "india");
    return Array.from(
      new Set(filtered.map((c) => c.city).filter(Boolean).sort((a, b) => a.localeCompare(b)))
    );
  }, [colleges]);

  const countries = useMemo(() => {
    const filtered = colleges.filter((c) => normalize(c.country) !== "india" && c.country);
    return Array.from(
      new Set(filtered.map((c) => c.country).filter(Boolean).sort((a, b) => a.localeCompare(b)))
    );
  }, [colleges]);

  const filteredColleges = useMemo(() => {
    const normSearch = normalize(searchTerm);
    return colleges.filter((college) => {
      const isIndia = normalize(college.country) === "india";
      if (selectedTab === "india" && !isIndia) return false;
      if (selectedTab === "abroad" && isIndia) return false;

      if (selectedTab === "india" && selectedCity) {
        const variants = createVariants(selectedCity);
        const collegeCityVariants = createVariants(college.city);
        const matchesCity =
          variants.some((v) => collegeCityVariants.includes(v)) ||
          collegeCityVariants.some((v) => variants.includes(v));
        if (!matchesCity) return false;
      }

      if (selectedTab === "abroad" && selectedCountry) {
        const variants = createVariants(selectedCountry);
        const collegeCountryVariants = createVariants(college.country);
        const matchesCountry =
          variants.some((v) => collegeCountryVariants.includes(v)) ||
          collegeCountryVariants.some((v) => variants.includes(v));
        if (!matchesCountry) return false;
      }

      if (normSearch) {
        const haystack = [
          college.name,
          college.city,
          college.state,
          college.country,
          college.address,
          ...college.approval,
          ...college.streams,
        ]
          .filter(Boolean)
          .map((value) => normalize(value));
        if (!haystack.some((value) => value.includes(normSearch))) return false;
      }

      return true;
    });
  }, [colleges, selectedTab, selectedCity, selectedCountry, searchTerm]);

  const handleSelectCity = (city: string) => {
    const newCity = city === selectedCity ? "" : city;
    setSelectedCity(newCity);
    setSelectedCountry("");
    setSelectedTab("india");
    const params = new URLSearchParams();
    params.set("scope", "india");
    if (newCity) params.set("city", newCity);
    router.replace(`/course/mbbs.html?${params.toString()}`, { scroll: true });
  };

  const handleSelectCountry = (country: string) => {
    const newCountry = country === selectedCountry ? "" : country;
    setSelectedCountry(newCountry);
    setSelectedCity("");
    setSelectedTab("abroad");
    const params = new URLSearchParams();
    params.set("scope", "abroad");
    if (newCountry) params.set("country", newCountry);
    router.replace(`/course/mbbs.html?${params.toString()}`, { scroll: true });
  };

  const handleTabChange = (tab: "india" | "abroad") => {
    setSelectedTab(tab);
    setSelectedCity("");
    setSelectedCountry("");
    const params = new URLSearchParams();
    params.set("scope", tab);
    router.replace(`/course/mbbs.html?${params.toString()}`, { scroll: true });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-10 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">MBBS Colleges Explorer</h1>
            <p className="text-gray-600 mt-1">
              Select a city or country to view MBBS colleges. Data updates automatically from your
              Firestore database.
            </p>
          </div>
          <div className="flex gap-2 bg-white border rounded-full p-1 shadow-sm">
            <button
              type="button"
              onClick={() => handleTabChange("india")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedTab === "india" ? "bg-red-700 text-white" : "text-gray-600 hover:text-red-700"
              }`}
            >
              India (City)
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("abroad")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedTab === "abroad" ? "bg-red-700 text-white" : "text-gray-600 hover:text-red-700"
              }`}
            >
              Abroad (Country)
            </button>
          </div>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search colleges, location, approval, streams…"
              className="flex-1 min-w-[220px] border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-700"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCity("");
                  setSelectedCountry("");
                  setSelectedTab("india");
                  router.replace("/course/mbbs.html?scope=india", { scroll: true });
                }}
                className="px-4 py-2 rounded-full border text-sm text-gray-600 hover:border-red-700 hover:text-red-700"
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">
              {selectedTab === "india" ? "Cities in India" : "Countries"}
            </h2>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {selectedTab === "india"
                ? cities.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => handleSelectCity(city)}
                      className={`px-4 py-2 rounded-full border text-sm transition ${
                        selectedCity === city
                          ? "bg-red-700 text-white border-red-700"
                          : "border-gray-300 text-gray-700 hover:border-red-700 hover:text-red-700"
                      }`}
                    >
                      {city}
                    </button>
                  ))
                : countries.map((country) => (
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
                  ))}
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {selectedTab === "india"
                ? selectedCity
                  ? `MBBS Colleges in ${selectedCity}`
                  : "MBBS Colleges in India"
                : selectedCountry
                ? `MBBS Colleges in ${selectedCountry}`
                : "MBBS Colleges Abroad"}
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
            <div className="px-4 md:px-6 py-6 space-y-6">
              {filteredColleges.map((college) => {
                const primaryImage =
                  college.raw?.image ||
                  college.raw?.logoUrl ||
                  college.raw?.logo ||
                  "/build/assets/t-1709039660-chitkara-university-rajpura.jpeg";
                const ratingValue = Number(college.raw?.rating ?? college.raw?.overallRating ?? "");
                const rating = Number.isFinite(ratingValue) ? ratingValue : null;
                const totalCourses =
                  college.raw?.totalCourses ||
                  college.raw?.noOfCourses ||
                  college.raw?.coursesCount ||
                  college.raw?.numberOfCourses;
                const packageFee =
                  college.raw?.totalFees ||
                  college.raw?.fee ||
                  college.raw?.fees ||
                  college.raw?.package ||
                  college.raw?.avgFee ||
                  college.raw?.tuition;
                const streamsPreview = college.streams.slice(0, 6);
                return (
                  <div key={college.id} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 lg:w-72 h-48 md:h-auto relative bg-gray-100">
                        <Image
                          src={primaryImage}
                          alt={college.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{college.name}</h3>
                            <div className="text-sm text-gray-500">
                              {college.address || `${college.city}${college.state ? `, ${college.state}` : ""}`}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">{college.country}</div>
                          </div>
                          <div className="flex flex-col items-start text-sm text-gray-600 gap-1">
                            {rating && (
                              <div>
                                <span className="font-semibold text-gray-900">{rating.toFixed(2)}</span> Rating
                              </div>
                            )}
                            {totalCourses && (
                              <div>{totalCourses} Courses</div>
                            )}
                            {packageFee && (
                              <div className="text-red-700 font-medium">{packageFee}</div>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Location</p>
                            <p>
                              {[college.city, college.state].filter(Boolean).join(", ")}
                            </p>
                            <p className="text-xs text-gray-500">{college.country}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Streams / Tags</p>
                            <div className="flex flex-wrap gap-1">
                              {streamsPreview.length > 0 ? (
                                streamsPreview.map((stream, index) => (
                                  <span
                                    key={`${college.id}-stream-${index}`}
                                    className="px-2 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-100 text-xs"
                                  >
                                    {stream}
                                  </span>
                                ))
                              ) : (
                                <span className="text-xs text-gray-400">—</span>
                              )}
                              {college.streams.length > streamsPreview.length && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full border border-gray-200 text-xs">
                                  +{college.streams.length - streamsPreview.length} more
                                </span>
                              )}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Approvals</p>
                            <p className="text-xs text-gray-600">
                              {college.approval.length > 0 ? college.approval.join(" | ") : "—"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
                          <div className="text-xs text-gray-500">
                            Data updates automatically from your Firestore collection.
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
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}