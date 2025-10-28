"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function CoursesPage() {
    const [ugCourses, setUgCourses] = useState([]);
    const [pgCourses, setPgCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch courses dynamically from Firestore
    const fetchCourses = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "courses"));
            const courseList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Split by courseLevel (UG / PG)
            setUgCourses(courseList.filter((c) => c.courseLevel === "UG"));
            setPgCourses(courseList.filter((c) => c.courseLevel === "PG"));
        } catch (error) {
            console.error("Error loading courses:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // Reusable course card UI
    const renderCourseCard = (course) => (
        <div
            key={course.id}
            className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between border border-gray-200 hover:shadow-lg transition"
        >
            <div className="flex justify-between items-center mb-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        {course.courseName || "Unnamed Course"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        {course.subtitle || course.category || ""}
                    </p>
                </div>
                {course.icon ? (
                    <img
                        src={course.icon}
                        alt={course.courseName}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                    />
                ) : (
                    <img
                        src={'https://d13loartjoc1yn.cloudfront.net/upload/course/icon/1.svg'}
                        alt={course.courseName}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                    />
                )}
            </div>

            <div className="flex justify-between text-sm border-t border-b py-3 mt-2">
                <div>
                    <span className="text-gray-500 block">Total Colleges</span>
                    <p className="font-semibold text-gray-800">
                        {course.totalColleges || "N/A"}
                    </p>
                </div>
                <div>
                    <span className="text-gray-500 block">Related Exams</span>
                    <p className="text-gray-800">
                        {course.entranceExams?.slice(0, 2).join(", ") || "N/A"}{" "}
                        {course.entranceExams?.length > 2 && (
                            <span className="text-sm text-gray-500">
                                +{course.entranceExams.length - 2}
                            </span>
                        )}
                    </p>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <a
                    href={course.exploreLink}
                    target="_blank"
                    className="text-sm font-medium text-white bg-red-700 hover:bg-red-800 px-3 py-2 rounded-lg"
                >
                    Explore Colleges
                </a>
                <a
  href={`/course/${course.id}`}
  className="text-sm font-medium text-red-700 border border-red-700 hover:bg-red-700 hover:text-white px-3 py-2 rounded-lg"
>
  More Details
</a>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            <div className="container mx-auto px-4 py-10">
                {/* Breadcrumb */}
                <nav className="text-sm mb-4 text-gray-500">
                    <a href="/" className="hover:underline text-red-700">
                        Home
                    </a>{" "}
                    /{" "}
                    <a href="/courses" className="hover:underline text-red-700">
                        Courses
                    </a>
                </nav>

                <h1 className="text-2xl md:text-3xl font-bold mb-3">
                    List of Courses - 2025
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Explore a wide range of undergraduate, postgraduate, diploma, and PG
                    diploma programs offered by top colleges and universities across India.
                    With detailed insights into curriculum, admission process, and
                    placement opportunities, CollegeSearch helps you find the right course
                    that matches your academic goals and interests.
                </p>

                {loading ? (
                    <div className="flex justify-center py-10">
                        <div className="w-10 h-10 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        {/* UG Section */}
                        {ugCourses.length > 0 && (
                            <section className="mb-10">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    UG - Under Graduate
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {ugCourses.map((course) => renderCourseCard(course))}
                                </div>
                            </section>
                        )}

                        {/* PG Section */}
                        {pgCourses.length > 0 && (
                            <section className="mb-10">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    PG - Post Graduate
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {pgCourses.map((course) => renderCourseCard(course))}
                                </div>
                            </section>
                        )}
                    </>
                )}

                {/* Pagination (Static for now) */}
                <div className="flex justify-center mt-8 space-x-2">
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`w-8 h-8 rounded-full text-sm ${page === 1
                                    ? "bg-red-700 text-white"
                                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
