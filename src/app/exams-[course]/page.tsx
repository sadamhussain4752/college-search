 "use client";
 
import { use, useEffect, useMemo, useState } from "react";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import Image from "next/image";
 import { db } from "@/firebase/firebase";
 import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
 import { slugToCourseName, supportedCourseSlugs } from "@/lib/courses";
 import Link from "next/link";
 
 type ExamDoc = {
   id: string;
   title?: string;
   shortName?: string;
   course?: string;
   examDate?: string;
   logo?: string;
   slug?: string;
   detailsUrl?: string;
 };
 
export default function CourseExamsPage({ params }: { params: Promise<{ course: string }> }) {
  const { course } = use(params);
   const courseName = slugToCourseName[course] || "";
 
   const [exams, setExams] = useState<ExamDoc[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [notSupported, setNotSupported] = useState<boolean>(false);
 
   useEffect(() => {
     // Validate slug support early
     if (!supportedCourseSlugs.includes(course) || !courseName) {
       setNotSupported(true);
       setLoading(false);
       return;
     }
 
     const col = collection(db, "exams");
     // Expect Firestore docs to have exact `course` value that matches our mapping
     const q = query(col, where("course", "==", courseName), orderBy("title"));
     const unsub = onSnapshot(
       q,
       (snap) => {
         const data: ExamDoc[] = snap.docs.map((d) => ({
           id: d.id,
           ...(d.data() as any),
         }));
         setExams(data);
         setLoading(false);
       },
       (err) => {
         console.error("Error subscribing to exams:", err);
         setLoading(false);
       }
     );
     return () => unsub();
   }, [course, courseName]);
 
   const headingText = useMemo(() => {
     if (notSupported) return "Course Not Supported";
     if (!courseName) return "Exams";
     return `${courseName} Entrance Exams`;
   }, [notSupported, courseName]);
 
   return (
     <main className="min-h-screen bg-gray-50">
       <Header />
 
       <div className="container common_listing_wrapper" id="exam_listing_wrapper">
         <h1>{headingText}</h1>
 
         {!notSupported ? (
           <>
             <article className="sanitize_content">
               <p>
                 This page shows live data from Firestore for the course: <b>{courseName}</b>. Any exams added or
                 updated in the database will appear here automatically.
               </p>
             </article>
 
             <div className="main_listing_wrapper" style={{ gridTemplateColumns: "1fr" }}>
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
                 ) : exams.length === 0 ? (
                   <div className="listing_data_card" style={{ textAlign: "center" }}>
                     <p>No exams found yet for this course.</p>
                   </div>
                 ) : (
                   exams.map((exam) => {
                     const detailsHref = exam.slug
                       ? `/exam/${exam.slug}`
                       : exam.detailsUrl || `/exam/${exam.id}`;
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
                               <p>{exam.course || courseName}</p>
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
           </>
         ) : (
           <div className="listing_data_card" style={{ marginTop: 16 }}>
             <p>
               The course slug "<b>{course}</b>" is not supported. Supported slugs include:
             </p>
             <p style={{ marginTop: 8 }}>
               {supportedCourseSlugs.map((s) => (
                 <Link key={s} href={`/exams-${s}`} style={{ marginRight: 12 }}>
                   /exams-{s}
                 </Link>
               ))}
             </p>
           </div>
         )}
       </div>
 
       <Footer />
     </main>
   );
 }
 

