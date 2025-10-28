import Header from '@/components/Header'
import CoursesTabs from '@/components/CoursesTabs'
import UpcomingExams from '@/components/UpcomingExams'
import LatestArticles from '@/components/LatestArticles'
import LatestNews from '@/components/LatestNews'
import FooterLinking from '@/components/FooterLinking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Modal Backdrop */}
      <div id="modalBackdrop"></div>

      {/* Hero Section */}
      <section id="HomePageSection">
        <div className="header_banner container">
          <div className="wrap_of_input">
            <div className="CS_tagline">
              <h1>
                Discover and Find the <span className="strikethrough">Best</span> <span>Right</span> College
              </h1>
            </div>

            {/* Search bar snippet */}
            <div id="HomeSearchbarSnippet">
              <div id="mobileHomeSearch">Search by Course, Location...</div>
            </div>

            {/* Popular Courses */}
            <div className="popularCollegeSearch">
              <p>Popular Colleges by Courses:</p>
              <div className="pop_clg_link">
                {['B.tech','B.Sc','B.com','BBA','BCA','BA','MBA','LLB','MCA','B.Pharm'].map((course, idx) => (
                  <a key={idx} href={`${course.toLowerCase().replace('.', '')}-colleges-india.html`}>
                    {course}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Explore Courses */}
        <div id="preferredCourseSection">
          <div className="container" id="Explore_course">
            <h2>Explore Courses</h2>
            <CoursesTabs />
          </div>
        </div>

        {/* Upcoming Exams, Latest Articles, Latest News */}
        <div className="container">
          <section id="upcomingExamWrapper">
            <h2 className="tech_h2">Upcoming Exams</h2>
            <UpcomingExams />
          </section>

          <LatestArticles />
          <LatestNews />
        </div>
      </section>

      {/* Footer Sections */}
      <FooterLinking />
      <Footer />

      {/* Success Modal */}
      <div id="successModal" className="modal reloadWindow">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title" id="modal_clg_logo"></p>
            <span className="close">&times;</span>
          </div>
          <div className="modal-body">
            <p className="successIcon"></p>
            <p className="successHeading">Registered Successfully</p>
            <p className="successText">
              Now you can download brochures, get expert counseling and submit applications hassle-free. Your
              college hunt journey begins now!
            </p>
            <p className="successcourseText"></p>

            <div className="redirect-wrap" id="redirectWrap">
              <p className="redirectText">
                Redirecting in <span id="countdown">10</span> seconds… <span className="loader"></span>
              </p>
            </div>

            <div className="applynow_btn_wrap" id="admitQuest">
              <a
                href="#"
                target="_blank"
                id="applyNowLink"
                className="btn applynow_btn"
              >
                Apply Now via <img src="build/assets/admitquestLogo-C9IGcvDE.png" alt="AdmitQuest Logo" />
              </a>
              <a href="#" className="btn closenow_btn" id="closebtn">
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
