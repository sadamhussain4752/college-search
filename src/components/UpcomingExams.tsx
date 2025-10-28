'use client';

import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Image from "next/image";

interface Exam {
  id: string;
  examName?: string;
  logo?: string;
  course?: string;
  examDate?: string;
  examOverview?: {
    coursesOffered?: string[];
  };
}

export default function UpcomingExams() {
  const [exams, setExams] = useState<Exam[]>([]);

  const fetchExams = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "keamExams"));
      const data: any[] = querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...(doc.data() as Exam),
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
      {exams.map((exam) => (
        <a
          key={exam.id}
          href={`/exam/${exam.id}?title=${encodeURIComponent(exam.examName || "")}`}
          className="upcomingExamWrapperDiv"
        >
          <Image
            src={
              exam.logo ||
              "https://d13loartjoc1yn.cloudfront.net/upload/exam/1744099053cat logo.webp"
            }
            alt={exam.examName || "Exam Logo"}
            width={80}
            height={80}
            className="object-contain"
            loading="lazy"
          />
          <p>{exam.examName || "Exam Name"}</p>
          <span className="course_text">
            {exam.examOverview?.coursesOffered?.length
              ? exam.examOverview.coursesOffered.join(", ")
              : exam.course || "N/A"}
          </span>
          <span>Exam Date</span>
          <b>{exam.examDate || "TBA"}</b>
        </a>
      ))}
    </div>
  );
}
