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

export const navigationData2 = [];

export const navigationData = [
  {
    heading: "Management",
    sections: [
      {
        title: "Popular Courses",
        links: [
          { label: "MBA", url: "/course/mba.html" },
          { label: "BBA", url: "/course/bba.html" },
        ],
      },
      {
        title: "MBA Colleges by State",
        links: [
          { label: "MBA Colleges in Karnataka", url: "/course/mba.html?state=Karnataka" },
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
          { label: "Bachelor Of Technology (B.Tech)", url: "/course/engineering.html" },
          { label: "Master Of Technology (M.Tech)", url: "/course/mtech.html" },
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
    heading: "MBBS",
    sections: [
      {
        title: "Popular Courses",
        links: [
          { label: "MBBS", url: "/course/mbbs.html" },
        ],
      },
      {
        title: "MBBS Colleges in India",
        links: [
          { label: "MBBS Colleges in Bangalore", url: "/course/mbbs.html?scope=india&city=Bangalore" },
          { label: "MBBS Colleges in Delhi Ncr", url: "/course/mbbs.html?scope=india&city=Delhi%20Ncr" },
          { label: "MBBS Colleges in Pune", url: "/course/mbbs.html?scope=india&city=Pune" },
        ],
      },
      {
        title: "MBBS Colleges in Abroad",
        links: [
          { label: "MBBS in Bangladesh", url: "/course/mbbs.html?scope=abroad&country=Bangladesh" },
          { label: "MBBS in Russia", url: "/course/mbbs.html?scope=abroad&country=Russia" },
          { label: "MBBS in China", url: "/course/mbbs.html?scope=abroad&country=China" },
          { label: "MBBS in Ukraine", url: "/course/mbbs.html?scope=abroad&country=Ukraine" },
          { label: "MBBS in Nepal", url: "/course/mbbs.html?scope=abroad&country=Nepal" },
          { label: "MBBS in Kazakhstan", url: "/course/mbbs.html?scope=abroad&country=Kazakhstan" },
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
