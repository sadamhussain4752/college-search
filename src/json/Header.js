// src/data/headerData.js

export const contactDetails = [
  { href: "tel:+919228151258", label: "+91 92281 51258" },
  { href: "mailto:info@collegesearch.in", label: "info@collegesearch.in" },
];

export const navigationLinks = [
  { href: "/exams", label: "Exams" },
  { href: "/boards", label: "Boards" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/admissionform", label: "Admission 2025" },
  { href: "/counselling", label: "Counselling" },
  { href: "/internships", label: "Internships" },
  { href: "/jobs", label: "Jobs" },
];

export const socialLinks = [
  { href: "https://www.facebook.com/CollegeSearch?fref=ts", className: "facebook" },
  { href: "https://twitter.com/india_colleges", className: "twitter" },
  { href: "https://www.linkedin.com/school/indiacollegesearch", className: "linkedin" },
  { href: "https://www.instagram.com/collegesearch_in/", className: "instagram" },
];

export const headerData = {
  header: {
    joinMessage: {
      title: "Join CollegeSearch Family",
      subtitle:
        "Register & enjoy the perks of a Universal College Application, Easy Process, Time-saving, and Free Contact details and Brochures.",
      loginLink: "student-login.html",
    },
    facilities: [
      { iconClass: "facilities_icon", text: "20 Lakhs+\nMonthly Users" },
      { iconClass: "facilities_icon", text: "20 Lakhs+\nMonthly Users" },
      { iconClass: "facilities_icon", text: "20 Lakhs+\nMonthly Users" },
    ],
    search: {
      popularBranches: [
        { label: "MBA/PGDM", url: "mba-colleges-india.html" },
        { label: "MCA", url: "mca-colleges-india.html" },
        { label: "B.Tech/B.E", url: "engineering-colleges-india.html" },
        { label: "B.Sc", url: "bsc-colleges-india.html" },
        { label: "BCA", url: "bca-colleges-india.html" },
        { label: "BBA", url: "bba-colleges-india.html" },
        { label: "B.COM", url: "commerce-colleges-india.html" },
      ],
      trendingSearches: [
        { label: "Top MBA Colleges in Delhi/NCR", url: "mba/colleges-delhi-ncr.html" },
        { label: "Top MBA Colleges in Bangalore", url: "mba/colleges-bangalore.html" },
        { label: "Top engineering Colleges in Delhi/NCR", url: "engineering/colleges-delhi-ncr.html" },
        { label: "Top engineering Colleges in Bangalore", url: "engineering/colleges-bangalore.html" },
      ],
    },
  },
};

export const navigationData2 = [
  {
    heading: "Explore Courses",
    courses: [
      {
        id: 0,
        name: "BCA",
        sections: [
          {
            title: "About The Courses",
            links: [
              { label: "Bachelor Of Computer Application", url: "https://www.collegesearch.in/course/bca" },
              { label: "BCA Colleges In India", url: "https://www.collegesearch.in/bca-colleges-india" },
            ],
          },
          {
            title: "Colleges by City",
            links: [
              { label: "BCA Colleges in Bangalore", url: "https://www.collegesearch.in/bca/colleges-bangalore" },
              { label: "BCA Colleges in Delhi Ncr", url: "https://www.collegesearch.in/bca/colleges-delhi-ncr" },
              { label: "BCA Colleges in Greater Noida", url: "https://www.collegesearch.in/bca/colleges-greater-noida" },
              { label: "BCA Colleges in Pune", url: "https://www.collegesearch.in/bca/colleges-pune" },
              { label: "BCA Colleges in Indore", url: "https://www.collegesearch.in/bca/colleges-indore" },
              { label: "BCA Colleges in Mumbai", url: "https://www.collegesearch.in/bca/colleges-mumbai" },
            ],
          },
          {
            title: "Colleges by State",
            links: [
              { label: "BCA Colleges in Punjab", url: "https://www.collegesearch.in/bca/colleges-punjab" },
              { label: "BCA Colleges in Uttar Pradesh", url: "https://www.collegesearch.in/bca/colleges-uttar-pradesh" },
              { label: "BCA Colleges in Maharashtra", url: "https://www.collegesearch.in/bca/colleges-maharashtra" },
              { label: "BCA Colleges in West Bengal", url: "https://www.collegesearch.in/bca/colleges-west-bengal" },
              { label: "BCA Colleges in Tamil Nadu", url: "https://www.collegesearch.in/bca/colleges-tamil-nadu" },
              { label: "BCA Colleges in Madhya Pradesh", url: "https://www.collegesearch.in/bca/colleges-madhya-pradesh" },
            ],
          },
          {
            title: "Related Exams",
            links: [
              { label: "NIMCET", url: "https://www.collegesearch.in/exams/nimcet" },
              { label: "CUET", url: "https://www.collegesearch.in/exams/cuet" },
              { label: "IPU CET", url: "https://www.collegesearch.in/exams/ggsipu-cet" },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "MCA",
        sections: [
          {
            title: "About The Courses",
            links: [
              { label: "Master Of Computer Application", url: "https://www.collegesearch.in/course/mca" },
              { label: "MCA Colleges In India", url: "https://www.collegesearch.in/mca-colleges-india" },
            ],
          },
          {
            title: "Colleges by City",
            links: [
              { label: "MCA Colleges in Bangalore", url: "https://www.collegesearch.in/mca/colleges-bangalore" },
              { label: "MCA Colleges in Delhi Ncr", url: "https://www.collegesearch.in/mca/colleges-delhi-ncr" },
              { label: "MCA Colleges in Greater Noida", url: "https://www.collegesearch.in/mca/colleges-greater-noida" },
              { label: "MCA Colleges in Pune", url: "https://www.collegesearch.in/mca/colleges-pune" },
              { label: "MCA Colleges in Indore", url: "https://www.collegesearch.in/mca/colleges-indore" },
              { label: "MCA Colleges in Mumbai", url: "https://www.collegesearch.in/mca/colleges-mumbai" },
            ],
          },
          {
            title: "Colleges by State",
            links: [
              { label: "MCA Colleges in Punjab", url: "https://www.collegesearch.in/mca/colleges-punjab" },
              { label: "MCA Colleges in Uttar Pradesh", url: "https://www.collegesearch.in/mca/colleges-uttar-pradesh" },
              { label: "MCA Colleges in Maharashtra", url: "https://www.collegesearch.in/mca/colleges-maharashtra" },
              { label: "MCA Colleges in West Bengal", url: "https://www.collegesearch.in/mca/colleges-west-bengal" },
              { label: "MCA Colleges in Tamil Nadu", url: "https://www.collegesearch.in/mca/colleges-tamil-nadu" },
              { label: "MCA Colleges in Madhya Pradesh", url: "https://www.collegesearch.in/mca/colleges-madhya-pradesh" },
            ],
          },
        ],
      },
    ],
  },
];

export const navigationData = [
  {
    heading: "Management",
    sections: [
      {
        title: "Popular Courses",
        links: [
          { label: "MBA", url: "course/mba.html" },
          { label: "BBA", url: "course/bba.html" },
        ],
      },
      {
        title: "MBA Colleges by City",
        links: [
          { label: "MBA/PGDM Colleges in Bangalore", url: "mba/colleges-bangalore.html" },
          { label: "MBA/PGDM Colleges in Delhi Ncr", url: "mba/colleges-delhi-ncr.html" },
          { label: "MBA/PGDM Colleges in Greater Noida", url: "mba/colleges-greater-noida.html" },
          { label: "MBA/PGDM Colleges in Pune", url: "mba/colleges-pune.html" },
          { label: "MBA/PGDM Colleges in Indore", url: "mba/colleges-indore.html" },
          { label: "MBA/PGDM Colleges in Mumbai", url: "mba/colleges-mumbai.html" },
        ],
      },
      {
        title: "MBA Colleges by State",
        links: [
          { label: "MBA/PGDM Colleges in Punjab", url: "mba/colleges-punjab.html" },
          { label: "MBA/PGDM Colleges in Uttar Pradesh", url: "mba/colleges-uttar-pradesh.html" },
          { label: "MBA/PGDM Colleges in Maharashtra", url: "mba/colleges-maharashtra.html" },
          { label: "MBA/PGDM Colleges in West Bengal", url: "mba/colleges-west-bengal.html" },
          { label: "MBA/PGDM Colleges in Tamil Nadu", url: "mba/colleges-tamil-nadu.html" },
          { label: "MBA/PGDM Colleges in Madhya Pradesh", url: "mba/colleges-madhya-pradesh.html" },
        ],
      },
      {
        title: "Related Exams",
        links: [
          { label: "CAT", url: "exams/cat.html" },
          { label: "MAT", url: "exams/mat.html" },
          { label: "XAT", url: "exams/xat.html" },
          { label: "SNAP", url: "exams/snap.html" },
          { label: "CMAT", url: "exams/cmat.html" },
          { label: "NMAT", url: "exams/nmat.html" },
          { label: "IBSAT", url: "exams/ibsat.html" },
        ],
      },
    ],
  },
  {
    heading: "Engineering",
    sections: [
      {
        title: "Popular Courses",
        links: [
          { label: "Bachelor Of Technology (B.Tech)", url: "course/engineering.html" },
          { label: "Master Of Technology (M.Tech)", url: "course/mtech.html" },
        ],
      },
      {
        title: "B.Tech Colleges by City",
        links: [
          { label: "B.Tech Colleges in Bangalore", url: "engineering/colleges-bangalore.html" },
          { label: "B.Tech Colleges in Delhi Ncr", url: "engineering/colleges-delhi-ncr.html" },
          { label: "B.Tech Colleges in Greater Noida", url: "engineering/colleges-greater-noida.html" },
          { label: "B.Tech Colleges in Pune", url: "engineering/colleges-pune.html" },
          { label: "B.Tech Colleges in Indore", url: "engineering/colleges-indore.html" },
          { label: "B.Tech Colleges in Mumbai", url: "engineering/colleges-mumbai.html" },
        ],
      },
      {
        title: "M.Tech Colleges by City",
        links: [
          { label: "M.Tech Colleges in Bangalore", url: "mtech/colleges-bangalore.html" },
          { label: "M.Tech Colleges in Delhi Ncr", url: "mtech/colleges-delhi-ncr.html" },
          { label: "M.Tech Colleges in Greater Noida", url: "mtech/colleges-greater-noida.html" },
          { label: "M.Tech Colleges in Pune", url: "mtech/colleges-pune.html" },
          { label: "M.Tech Colleges in Indore", url: "mtech/colleges-indore.html" },
          { label: "M.Tech Colleges in Mumbai", url: "mtech/colleges-mumbai.html" },
        ],
      },
    ],
  },
  {
    heading: "Science",
    sections: [
      {
        title: "Popular Courses",
        links: [
          { label: "Bachelor Of Science (B.Sc)", url: "course/bsc.html" },
          { label: "Master Of Science (M.Sc)", url: "course/msc.html" },
        ],
      },
      {
        title: "B.Sc Colleges by City",
        links: [
          { label: "B.Sc Colleges in Bangalore", url: "bsc/colleges-bangalore.html" },
          { label: "B.Sc Colleges in Delhi Ncr", url: "bsc/colleges-delhi-ncr.html" },
          { label: "B.Sc Colleges in Pune", url: "bsc/colleges-pune.html" },
        ],
      },
    ],
  },
  {
    heading: "More",
    sections: [
      {
        title: "More",
        links: [
          { label: "Exams", url: "exams.html" },
          { label: "Latest Articles", url: "articles.html" },
          { label: "News & Updates", url: "news.html" },
          { label: "Online Courses", url: "online-courses.html" },
          { label: "Study Abroad", url: "study-abroad.html" },
          { label: "Internships", url: "internships.html" },
          { label: "Jobs", url: "jobs.html" },
        ],
      },
    ],
  },
];
