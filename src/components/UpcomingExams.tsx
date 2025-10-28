'use client';
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function UpcomingExams() {
  const [exams, setExams] = useState([]);

  const fetchExams = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "keamExams"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExams(data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
  <div className="upcomingExamWrapperClass scrollable-element">
      {exams.map((exam, idx) => (
        <a
          key={idx}
          href={`/exam/${exam.id}?title=${encodeURIComponent(exam.examName)}`}
          className="upcomingExamWrapperDiv"
        >
          <img
            src={exam.logo || 'https://d13loartjoc1yn.cloudfront.net/upload/exam/1744099053cat logo.webp'}
            alt={exam.examName || "Exam Logo"}
            loading="lazy"
          />
          <p>{exam.examName || "Exam Name"}</p>
          <span className="course_text">
            {exam.examOverview?.coursesOffered?.join(", ") || exam.course || "N/A"}
          </span>
          <span>Exam Date</span>
          <b>{exam.examDate || "TBA"}</b>
        </a>
      ))}
    </div>
  );
}
