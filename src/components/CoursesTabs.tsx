"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "@/firebase/firebase";

// ✅ Define the shape of each course item
interface CourseItem {
  id: string;
  name?: string;
  duration?: string;
  colleges: number;
  exams: number;
}

// ✅ Define the degree-level object structure
interface DegreeCourses {
  degree_1: CourseItem[]; // UG
  degree_2: CourseItem[]; // PG
  degree_3: CourseItem[]; // Diploma
}

export default function CoursesTabs() {
  const [activeTab, setActiveTab] = useState<"degree_1" | "degree_2" | "degree_3">("degree_1");
  const [degreeCourses, setDegreeCourses] = useState<DegreeCourses>({
    degree_1: [],
    degree_2: [],
    degree_3: [],
  });
  const [loading, setLoading] = useState<boolean>(true);

  const handleTabClick = (tabId: "degree_1" | "degree_2" | "degree_3") => {
    setActiveTab(tabId);
  };

  // ✅ Fetch course data dynamically
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const ug: CourseItem[] = [];
        const pg: CourseItem[] = [];
        const diploma: CourseItem[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data() as DocumentData;

          const courseBase = {
            id: doc.id,
            name: data.courseName || "",
            duration: data.duration || "",
            colleges: data.topColleges?.length || 0,
            exams: data.entranceExams?.length || 0,
          };

          // ✅ Categorize by courseLevel
          if (data.courseLevel === "UG") ug.push(courseBase);
          else if (data.courseLevel === "PG") pg.push(courseBase);
          else if (data.courseLevel === "Diploma") diploma.push(courseBase);
        });

        setDegreeCourses({
          degree_1: ug,
          degree_2: pg,
          degree_3: diploma,
        });
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center p-5">Loading courses...</div>;

  return (
    <>
      {/* ✅ Tabs Header */}
      <div className="tabs_btn_wrap" role="tablist">
        {[
          { id: "degree_1", label: "UG" },
          { id: "degree_2", label: "PG" },
          { id: "degree_3", label: "Diploma" },
        ].map(({ id, label }) => (
          <div
            key={id}
            className={`tab-button ${activeTab === id ? "active_tab" : ""}`}
            onClick={() => handleTabClick(id as "degree_1" | "degree_2" | "degree_3")}
            role="tab"
            aria-selected={activeTab === id}
          >
            {label}
          </div>
        ))}
      </div>

      {/* ✅ Tabs Content */}
      <div className="tabs_content_wrapper">
        {Object.entries(degreeCourses).map(([degreeId, courses]) => (
          <div
            key={degreeId}
            className={`tab-content ${activeTab === degreeId ? "active" : "hidden"}`}
            id={degreeId}
            role="tabpanel"
            aria-hidden={activeTab !== degreeId}
          >
            <div className="explore_course_wrap">
              {courses.length > 0 ? (
                courses.map((course: any) => (
                  <div key={course.id} className="explore_course_div">
                    <p className="course_logo"></p>

                    <a href={`/course/${course.id}`} className="course_name">
                      {course.name}
                    </a>

                    <div className="course_data_div">
                      <p>
                        <span>Duration</span>
                        <br />
                        {course.duration || "N/A"}
                      </p>
                      <p>
                        <span>Colleges</span>
                        <br />
                        {course.colleges}
                      </p>
                      <p>
                        <span>Related Exams</span>
                        <br />
                        {course.exams}
                      </p>
                    </div>

                    <a href={`/course/${course.id}`} className="view_link">
                      View Course Overview &gt;
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No courses available.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
