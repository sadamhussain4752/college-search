"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const exams = [
  {
    id: 1,
    title: "KEAM - 2025",
    shortName: "KEAM",
    course: "B.Tech / B.E.",
    examDate: "24th April, 2025",
    logo: "https://d13loartjoc1yn.cloudfront.net/upload/exam/131118050401_cee kerala.webp",
    detailsUrl: "https://www.collegesearch.in/exams/keam"
  },
  {
    id: 2,
    title: "PET Madhya Pradesh - 2025",
    shortName: "PET Madhya Pradesh",
    course: "B.Tech / B.E.",
    examDate: "N/A",
    logo: "https://d13loartjoc1yn.cloudfront.net/upload/exam/130114035954_vyapam.webp",
    detailsUrl: "https://www.collegesearch.in/exams/pet-madhya-pradesh"
  },
  {
    id: 3,
    title: "PU CET - 2025",
    shortName: "CET Punjab",
    course: "B.Tech / B.E.",
    examDate: "N/A",
    logo: "https://d13loartjoc1yn.cloudfront.net/upload/exam/130114040645_pcet.webp",
    detailsUrl: "https://www.collegesearch.in/exams/cet-punjab"
  },
  // add the rest here...
];

export default function Exams() {
  // Example: handle modal open
  const handleGetUpdates = (examId: string | number) => {
    console.log("Open modal for exam ID:", examId);
    // You can trigger modal logic here
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container common_listing_wrapper" id="exam_listing_wrapper">
        <h1>Entrance Exams - 2025</h1>

        <article className="sanitize_content">
          <p>
            There are various recognised Boards and Councils in India that are responsible for regulating and
            overseeing different aspects of education in the country.
          </p>
        </article>

        <div className="main_listing_wrapper">
          {/* Listing Filter */}
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
                            {[
                              { name: "B.Tech / B.E.", url: "https://www.collegesearch.in/exams-engineering" },
                              { name: "MBA / PGDM", url: "https://www.collegesearch.in/exams-mba" },
                              { name: "MBBS", url: "https://www.collegesearch.in/exams-medical" },
                              { name: "LLB", url: "https://www.collegesearch.in/exams-law" },
                              { name: "BBA / BBM / BBS", url: "https://www.collegesearch.in/exams-bba" },
                              { name: "MCA / MCM", url: "https://www.collegesearch.in/exams-mca" },
                              { name: "M.Tech / M.E.", url: "https://www.collegesearch.in/exams-mtech" },
                              { name: "BHM", url: "https://www.collegesearch.in/exams-bhm" },
                              { name: "M.Pharm", url: "https://www.collegesearch.in/exams-mpharm" },
                              { name: "B.Arch", url: "https://www.collegesearch.in/exams-architecture" },
                              { name: "MD", url: "https://www.collegesearch.in/exams-md" },
                              { name: "LLM", url: "https://www.collegesearch.in/exams-llm" },
                              { name: "BSc", url: "https://www.collegesearch.in/exams-bsc" },
                              { name: "BEd", url: "https://www.collegesearch.in/exams-b-ed" },
                              { name: "MSc", url: "https://www.collegesearch.in/exams-msc" },
                              { name: "Overall", url: "https://www.collegesearch.in/exams-all" }
                            ].map((course, idx) => (
                              <div key={idx} className="radio_input">
                                <label>
                                  <input
                                    type="radio"
                                    name="course"
                                    onClick={() => (window.location.href = course.url)}
                                  />
                                  {course.name}
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

          {/* Exam Listing */}
          <div className="listing_data_parent">
            {exams.map((exam) => (
              <div key={exam.id} className="listing_data_card">
                <a href={exam.detailsUrl} className="logo_and_info">
                 {exam.logo && (
  <Image
    src={exam.logo}
    alt={`${exam.shortName} Logo`}
    width={80}          // ✅ set width
    height={80}         // ✅ set height
    className="object-contain"
    priority={false}    // lazy-loads by default
  />
)}
                  <div className="listing_card_info">
                    <h3>{exam.title}</h3>
                    <div className="span_info">
                      <span>{exam.shortName}</span>
                    </div>
                  </div>
                </a>

                <div className="listing_second_info">
                  <div className="info_and_cta">
                    <div>
                      <span>Course</span>
                      <p>{exam.course}</p>
                    </div>
                    <button
                      onClick={() => handleGetUpdates(exam.id)}
                      className="open-modal trackCTA"
                      data-modal="registrationModal"
                      data-leadCTA="examGetUpdates"
                      data-head="default"
                    >
                      Get Updates
                    </button>
                  </div>
                  <div className="info_and_cta">
                    <div>
                      <span>Exam Date</span>
                      <p>{exam.examDate}</p>
                    </div>
                    <a href={exam.detailsUrl}>More Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
