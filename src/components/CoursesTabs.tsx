'use client';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function CoursesTabs() {
  const [activeTab, setActiveTab] = useState("degree_1");
  const [degreeCourses, setDegreeCourses] = useState({
    degree_1: [],
    degree_2: [],
    degree_3: [],
  });
  const [loading, setLoading] = useState(true);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // ✅ Fetch course data dynamically
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const ug = [];
        const pg = [];
        const diploma = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          // ✅ Sort into UG / PG / Diploma
          if (data.courseLevel === "UG") {
            ug.push({
              id: doc.id,
              name: data.courseName,
              duration: data.duration,
              colleges: data.topColleges?.length || 0,
              exams: data.entranceExams?.length || 0,
            });
          } else if (data.courseLevel === "PG") {
            pg.push({
              id: doc.id,
              name: data.courseName,
              duration: data.duration,
              colleges: data.topColleges?.length || 0,
              exams: data.entranceExams?.length || 0,
            });
          } else if (data.courseLevel === "Diploma") {
            diploma.push({
              id: doc.id,
              name: data.courseName,
              duration: data.duration,
              colleges: data.topColleges?.length || 0,
              exams: data.entranceExams?.length || 0,
            });
          }
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
      {/* ✅ Tab Buttons — SAME STYLE */}
      <div className="tabs_btn_wrap" role="tablist">
        <div
          className={`tab-button ${activeTab === "degree_1" ? "active_tab" : ""}`}
          onClick={() => handleTabClick("degree_1")}
          role="tab"
          aria-selected={activeTab === "degree_1"}
        >
          UG
        </div>
        <div
          className={`tab-button ${activeTab === "degree_2" ? "active_tab" : ""}`}
          onClick={() => handleTabClick("degree_2")}
          role="tab"
          aria-selected={activeTab === "degree_2"}
        >
          PG
        </div>
        <div
          className={`tab-button ${activeTab === "degree_3" ? "active_tab" : ""}`}
          onClick={() => handleTabClick("degree_3")}
          role="tab"
          aria-selected={activeTab === "degree_3"}
        >
          Diploma
        </div>
      </div>

      {/* ✅ Tab Content — SAME LAYOUT & CLASSES */}
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
                courses.map((course) => (
                  <div key={course.id} className="explore_course_div">
                    <p className="course_logo"></p>

                    <a
                      href={`/course/${course.id}`}
                      className="course_name "
                    >
                      {course.name}
                    </a>

                    <div className="course_data_div">
                      <p>
                        <span>Duration</span><br />{course.duration || "N/A"}
                      </p>
                      <p>
                        <span>Colleges</span><br />{course.colleges}
                      </p>
                      <p>
                        <span>Related Exams</span><br />{course.exams}
                      </p>
                    </div>

                    <a
                      href={`/course/${course.id}`}
                      className="view_link"
                    >
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
