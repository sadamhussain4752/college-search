'use client';
import React from "react";

const footerData = [
  {
    title: "Popular Colleges",
    links: [
      { name: "Manipal University Jaipur", url: "university/manipal-university-jaipur.html" },
      { name: "K R Mangalam University", url: "university/kr-mangalam-university-gurgaon.html" },
      { name: "IBS Hyderabad", url: "colleges/ibs-business-school-hyderabad.html" },
      { name: "Amity University Mumbai", url: "colleges/amity-university-mumbai-mumbai.html" },
      { name: "SAGE University", url: "colleges/sage-university-bhopal-bhopal.html" },
      { name: "IIT Bombay", url: "colleges/indian-institute-of-technology-bombay-iit-bombay-mumbai.html" },
      { name: "IIT Delhi", url: "colleges/indian-institute-of-technology-iit-delhi.html" },
    ]
  },
  {
    title: "New Age Colleges",
    links: [
      { name: "Newton School", url: "colleges/newtons-institute-of-engineering-guntur.html" },
      { name: "Scaler School of Technology", url: "colleges/scaler-academy.html" },
      { name: "Master union school of business", url: "colleges/masters-union-gurgaon.html" },
      { name: "Mirai School of Technology", url: "colleges/mirai-school-of-technology.html" },
      { name: "Vedam School of Technology", url: "colleges/vedam-school-of-technology.html" },
    ]
  },
  {
    title: "Courses",
    links: [
      { name: "MBA in Finance", url: "course/mba-finance.html" },
      { name: "MBA in HR", url: "course/mba-human-resources.html" },
      { name: "MBA Business Analytics", url: "course/mba-business-analytics.html" },
      { name: "MBA Marketing", url: "course/mba-marketing.html" },
      { name: "B.Tech Biotechnology", url: "course/btech-biotechnology.html" },
      { name: "B.Tech Mechanical Engineering", url: "course/btech-mechanical-engineering.html" },
      { name: "B.Tech Civil Engineering", url: "course/btech-civil-engineering.html" },
      { name: "B.Tech Electrical Engineering", url: "course/btech-electrical-engineering.html" },
      { name: "BSc Nursing", url: "course/bsc-nursing.html" },
      { name: "BSc Computer Science", url: "course/bsc-computer-science.html" },
      { name: "BSc Agriculture", url: "course/bsc-agriculture.html" },
      { name: "BSc Biotechnology", url: "course/bsc-biotechnology.html" },
    ]
  },
  {
    title: "Entrance Exams",
    links: [
      { name: "CAT Exam", url: "exams/cat.html" },
      { name: "GATE Exam", url: "exams/gate.html" },
      { name: "CLAT Exam", url: "exams/clat.html" },
      { name: "NEET PG Exam", url: "exams/neet-pg.html" },
      { name: "MAT Exam", url: "exams/mat.html" },
      { name: "JEE Main Exam", url: "exams/jee-main.html" },
      { name: "SNAP Exam", url: "exams/snap.html" },
      { name: "XAT Exam", url: "exams/xat.html" },
      { name: "NEET UG Exam", url: "exams/neet.html" },
      { name: "BITSAT Exam", url: "exams/bitsat.html" },
      { name: "CAT Preparation Tips", url: "exams/cat-preparation-tips.html" },
      { name: "CAT Exam Pattern", url: "exams/cat-exam-pattern.html" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "CBSE 12th Syllabus", url: "articles/cbse-12th-syllabus-2026-released-free-pdf-download.html" },
      { name: "CAT Study Material", url: "articles/cat-study-material-exm.html" },
      { name: "JEE Main Question Paper", url: "exams/jee-main-question-papers.html" },
      { name: "JEE Main Answer Key", url: "exams/jee-main-answer-key.html" },
      { name: "PM Scholarship", url: "articles/how-to-apply-for-pm-scholarship.html" },
      { name: "INSPIRE Scholarship", url: "articles/inspire-scholarship.html" },
      { name: "Odisha Scholarship", url: "articles/odisha-scholarships.html" },
      { name: "Canara Bank Scholarship", url: "articles/canara-bank-scholarship.html" },
      { name: "Maharashtra HSC", url: "boards/maharashtra-hsc-board.html" },
      { name: "ICSE Board", url: "boards/icse-10th-board.html" },
      { name: "Odisha CHSE", url: "boards/odisha-chse-12th.html" },
      { name: "JAC 12th Board", url: "boards/jac-12th-board.html" },
      { name: "Internships for Students", url: "internships.html" },
      { name: "Jobs for Students", url: "jobs.html" },
    ]
  },
  {
    title: "Tools & Predictors",
    links: [
      { name: "GATE Rank Predictor", url: "predictor/gate-rank-predictor.html" },
      { name: "JEE Main Rank Predictor", url: "predictor/jee-main-rank-predictor.html" },
      { name: "KCET Rank Predictor", url: "predictor/kcet-rank-predictor.html" },
      { name: "CAT Percentile Predictor", url: "news/cat-2024-percentile-predictor-predict-and-check-your-cat-2024-score-now.html" },
      { name: "JEE Main Percentile Predictor", url: "predictor/jee-main-percentile-predictor.html" },
      { name: "JEE Advanced College Predictor", url: "college-predictor/jee-advanced-college-predictor.html" },
      { name: "COMEDK Rank Predictor", url: "predictor/comedk-uget-rank-predictor.html" },
    ]
  },
  {
    title: "College Admission Forms",
    links: [
      { name: "MBA Admission in Punjab", url: "https://admitquest.ai/colleges/mba-punjab?utm_source=collegesearch&utm_medium=footer", target: "_blank" },
      { name: "BTech Admissions in Uttar Pradesh", url: "https://admitquest.ai/colleges/engineering-uttar-pradesh?utm_source=collegesearch&utm_medium=footer", target: "_blank" },
      { name: "BTech Admissions in Maharashtra", url: "https://admitquest.ai/colleges/engineering-maharashtra?utm_source=collegesearch&utm_medium=footer", target: "_blank" },
      { name: "BTech Admissions in Tamil Nadu", url: "https://admitquest.ai/colleges/engineering-tamil-nadu?utm_source=collegesearch&utm_medium=footer", target: "_blank" },
      { name: "BTech Admissions in Haryana", url: "https://admitquest.ai/colleges/engineering-haryana?utm_source=collegesearch&utm_medium=footer", target: "_blank" },
    ]
  },
];

export default function FooterLinking() {
  return (
    <div id="footer_linking">
      <div className="container">
        <span>Popular Searches</span>
        <div id="desktop_footer_linking">
          {footerData.map((section, idx) => (
            <div key={idx} className="accordion_div">
              <p className="accordion">{section.title}</p>
              <div className="panel">
                {section.links.map((link: any, linkIdx) => (
                  <a key={linkIdx} href={link.url} target={link.target || "_self"}>{link.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
