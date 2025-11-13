 "use client";
 
import { use, useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { slugToCourseName } from "@/lib/courses";

type ExamDoc = {
  id: string;
  title?: string;
  shortName?: string;
  course?: string;
  examDate?: string;
  logo?: string;
  slug?: string;
  detailsUrl?: string;
  coursesOffered?: string[];
  examOverview?: {
    coursesOffered?: string[];
  };
};

const buildTokens = (value?: string): string[] => {
  if (!value) return [];
  const tokens = new Set<string>();
  const lower = value.toLowerCase();
  const normalized = lower.replace(/[^a-z0-9]/g, "");
  if (lower.length > 1) tokens.add(lower);
  if (normalized.length > 1) tokens.add(normalized);
  lower
    .split(/[^a-z0-9]+/g)
    .map((part) => part.trim())
    .filter((part) => part.length > 1)
    .forEach((part) => {
      tokens.add(part);
      const partNormalized = part.replace(/[^a-z0-9]/g, "");
      if (partNormalized.length > 1) tokens.add(partNormalized);
    });
  return Array.from(tokens);
};

const slugifyCourse = (value: string): string => {
  if (!value) return "";
  const tokens = value.toLowerCase().match(/[a-z0-9]+/g);
  if (!tokens || tokens.length === 0) {
    return value.trim().toLowerCase().replace(/\s+/g, "-");
  }
  return tokens.join("-");
};

const titleFromSlug = (slug: string): string => {
  if (!slug) return "";
  return slug
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => (part.length <= 3 ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(" ");
};

export default function ExamsByCourse({ params }: { params: Promise<{ course: string }> }) {
  const { course: rawCourse } = use(params);
  const course = rawCourse === "exams.html" ? "overall" : rawCourse;
 
  const [primaryExams, setPrimaryExams] = useState<ExamDoc[]>([]);
  const [keamExams, setKeamExams] = useState<any[]>([]);
  const [loadingPrimary, setLoadingPrimary] = useState<boolean>(true);
  const [loadingKeam, setLoadingKeam] = useState<boolean>(true);

  useEffect(() => {
    setLoadingPrimary(true);
    const unsub = onSnapshot(
      query(collection(db, "exams"), orderBy("title")),
      (snap) => {
        const data: ExamDoc[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
        setPrimaryExams(data);
        setLoadingPrimary(false);
      },
      (err) => {
        console.error("Error subscribing exams:", err);
        setLoadingPrimary(false);
      }
    );
    return () => unsub();
  }, []);
 
  useEffect(() => {
    setLoadingKeam(true);
    const unsub = onSnapshot(
      query(collection(db, "keamExams"), orderBy("examName")),
      (snap) => {
        const rows = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
        setKeamExams(rows);
        setLoadingKeam(false);
      },
      (err) => {
        console.error("Error subscribing keamExams:", err);
        setLoadingKeam(false);
      }
    );
    return () => unsub();
  }, []);

  const loading = loadingPrimary || loadingKeam;

  const combinedExams = useMemo(() => {
    const mappedKeam: ExamDoc[] = keamExams.map((r: any) => ({
      id: r.id,
      title: r.examName || r.title,
      shortName: r.shortName || r.examShortName,
      course: Array.isArray(r.examOverview?.coursesOffered) ? r.examOverview?.coursesOffered?.[0] : r.course,
      examDate: r.examDate,
      logo: r.logo,
      slug: r.slug,
      detailsUrl: r.detailsUrl,
      coursesOffered: r.examOverview?.coursesOffered,
      examOverview: r.examOverview,
    }));

    const mapAll = new Map<string, ExamDoc>();
    [...primaryExams, ...mappedKeam].forEach((exam) => {
      if (exam?.id) mapAll.set(exam.id, exam);
    });
    return Array.from(mapAll.values());
  }, [primaryExams, keamExams]);

  const courseSlugNameMap = useMemo(() => {
    const map = new Map<string, string>();
    combinedExams.forEach((exam) => {
      const courseNames = new Set<string>();
      if (exam.course) courseNames.add(String(exam.course));
      if (Array.isArray(exam.coursesOffered)) {
        exam.coursesOffered.forEach((c) => c && courseNames.add(String(c)));
      }
      if (Array.isArray(exam.examOverview?.coursesOffered)) {
        exam.examOverview?.coursesOffered?.forEach((c: any) => c && courseNames.add(String(c)));
      }
      courseNames.forEach((name) => {
        const slug = slugifyCourse(name);
        if (slug) {
          if (!map.has(slug) || (name && name.length > (map.get(slug)?.length ?? 0))) {
            map.set(slug, name);
          }
        }
      });
    });
    return map;
  }, [combinedExams]);

  const resolvedCourseName = useMemo(() => {
    if (course === "overall") return "Overall";
    if (course === "pe") return "PE";
    return courseSlugNameMap.get(course) || slugToCourseName[course] || titleFromSlug(course);
  }, [course, courseSlugNameMap]);

  const filteredExams = useMemo(() => {
    if (course === "overall") {
      return combinedExams;
    }

    if (course === "pe") {
      const matches = combinedExams.filter((exam) => {
        const text = `${exam.shortName || ""} ${exam.title || ""}`.toLowerCase();
        return text.includes("pe");
      });
      const map = new Map<string, ExamDoc>();
      matches.forEach((exam) => map.set(exam.id, exam));
      return Array.from(map.values());
    }

    const targets = new Set<string>();
    buildTokens(resolvedCourseName).forEach((t) => targets.add(t));
    buildTokens(course).forEach((t) => targets.add(t));
    Array.from(targets).forEach((t) => {
      // also add slugified token fragments for flexible matching
      buildTokens(t).forEach((inner) => targets.add(inner));
    });
    const targetList = Array.from(targets).filter(Boolean);

    const targetSet = new Set<string>();
    targetList.forEach((t) => targetSet.add(t));
    const targetsArr = Array.from(targetSet);

    const map = new Map<string, ExamDoc>();
    combinedExams.forEach((exam) => {
      const offeredRaw = Array.isArray(exam.coursesOffered)
        ? exam.coursesOffered
        : Array.isArray(exam.examOverview?.coursesOffered)
        ? exam.examOverview?.coursesOffered || []
        : [];
      const haystacks = new Set<string>();
      const addValue = (val?: string) => {
        if (!val) return;
        const lower = String(val).toLowerCase();
        if (lower.length > 1) haystacks.add(lower);
        const normalized = lower.replace(/[^a-z0-9]/g, "");
        if (normalized.length > 1) haystacks.add(normalized);
        lower
          .split(/[^a-z0-9]+/g)
          .map((part) => part.trim())
          .filter((part) => part.length > 1)
          .forEach((part) => {
            haystacks.add(part);
            const partNormalized = part.replace(/[^a-z0-9]/g, "");
            if (partNormalized.length > 1) haystacks.add(partNormalized);
          });
      };
      addValue(exam.course);
      offeredRaw.forEach((item: any) => addValue(item));

      const haystackArr = Array.from(haystacks);
      const isMatch = targetsArr.some((target) => {
        if (!target) return false;
        return haystackArr.some((txt) => txt.includes(target) || target.includes(txt));
      });

      if (isMatch) {
        map.set(exam.id, exam);
      }
    });

    const results = Array.from(map.values());
    if (process.env.NODE_ENV === "development") {
      console.log("course filter debug", {
        slug: course,
        courseName: resolvedCourseName,
        targets: targetsArr,
        totalCombined: combinedExams.length,
        matched: results.length,
      });
    }
    return results;
  }, [combinedExams, course, resolvedCourseName]);
 
   const headingText = useMemo(() => {
     if (course === "pe") return "PE-related Entrance Exams";
    return resolvedCourseName ? `${resolvedCourseName} Entrance Exams` : "Entrance Exams";
  }, [course, resolvedCourseName]);

  const courseOptions = useMemo(() => {
    const baseOptions: { slug: string; name: string }[] = [];
    courseSlugNameMap.forEach((name, slug) => {
      if (slug && name && slug !== "overall") {
        baseOptions.push({ slug, name });
      }
    });
    baseOptions.sort((a, b) => a.name.localeCompare(b.name));
    const options: { slug: string; name: string }[] = [{ slug: "overall", name: "Overall" }, ...baseOptions];
    if (course === "pe" && !options.find((o) => o.slug === "pe")) {
      options.push({ slug: "pe", name: "PE" });
    }
    if (!options.find((o) => o.slug === course)) {
      options.push({ slug: course, name: resolvedCourseName });
    }
    return options;
  }, [courseSlugNameMap, course, resolvedCourseName]);
 
   return (
     <main className="min-h-screen bg-gray-50">
       <Header />
 
       <div className="container common_listing_wrapper" id="exam_listing_wrapper">
         <h1>{headingText}</h1>
 
         <div className="main_listing_wrapper" style={{ gridTemplateColumns: "280px 1fr", gap: 24 }}>
           {/* Left Filter - Course selector */}
           <div id="listing_filter_wrapper">
             <div className="fileter_closer">
               <span>Filters</span>
               <span className="close_filter"></span>
             </div>
             <div className="listing_filter_parent">
               <div className="listing_filter_div">
                 <p className="filter_type">Course</p>
                 <div className="search_box accordion_wrap">
                   <div className="accordion_div active">
                     <p className="accordion">Select or Search Course</p>
                     <div className="panel">
                       <div className="search_wrapper">
                         <input type="text" placeholder="Search" className="filterSearchText" />
                         <div className="search_data">
                            <div className="filterUrlDiv examFilterUrl search_list">
                             {courseOptions.map((option) => (
                               <div key={option.slug} className="radio_input">
                                 <label>
                                   <input
                                     type="radio"
                                     name="course"
                                     checked={option.slug === course}
                                     onChange={() => {
                                       if (option.slug) window.location.href = `/exams/${option.slug}`;
                                     }}
                                   />
                                   {option.name}
                                 </label>
                               </div>
                             ))}
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Right listing */}
           <div className="listing_data_parent">
             {loading ? (
               <>
                 {Array.from({ length: 6 }).map((_, i) => (
                   <div key={i} className="listing_data_card loading-skeleton">
                     <div className="skeleton-header">
                       <div className="skeleton-image" />
                       <div className="skeleton-title" />
                     </div>
                     <div className="skeleton-body">
                       <div className="skeleton-text" />
                       <div className="skeleton-text" />
                     </div>
                     <div className="skeleton-footer">
                       <div className="skeleton-button" />
                       <div className="skeleton-button" />
                     </div>
                   </div>
                 ))}
               </>
                 ) : filteredExams.length === 0 ? (
               <div className="listing_data_card" style={{ textAlign: "center" }}>
                 <p>No exams found for this selection.</p>
               </div>
             ) : (
               filteredExams.map((exam) => {
                 const detailsHref = exam.slug ? `/exam/${exam.slug}` : exam.detailsUrl || `/exam/${exam.id}`;
                 return (
                   <div key={exam.id} className="listing_data_card">
                     <Link href={detailsHref} className="logo_and_info">
                       {exam.logo && (
                         <Image
                           src={exam.logo}
                           alt={`${exam.shortName || exam.title || "Exam"} Logo`}
                           width={80}
                           height={80}
                           className="object-contain"
                           priority={false}
                         />
                       )}
                       <div className="listing_card_info">
                         <h3>{exam.title || exam.shortName || "Exam"}</h3>
                         <div className="span_info">
                           <span>{exam.shortName || "—"}</span>
                         </div>
                       </div>
                     </Link>
 
                     <div className="listing_second_info">
                       <div className="info_and_cta">
                         <div>
                           <span>Course</span>
                          <p>{exam.course || resolvedCourseName || "—"}</p>
                         </div>
                         <Link href={detailsHref} className="open-modal trackCTA">
                           More Details
                         </Link>
                       </div>
                       <div className="info_and_cta">
                         <div>
                           <span>Exam Date</span>
                           <p>{exam.examDate || "TBA"}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 );
               })
             )}
           </div>
         </div>
       </div>
 
       <Footer />
     </main>
   );
 }
 

