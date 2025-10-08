import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ExploreCoursesSection from '@/components/ExploreCoursesSection'
import UpcomingExamsSection from '@/components/UpcomingExamsSection'
import LatestArticlesSection from '@/components/LatestArticlesSection'
import LatestNewsSection from '@/components/LatestNewsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header/>
    <div id="modalBackdrop"></div>


    <div id="HomePageSection">
        <div className="header_banner container">
            <div className="wrap_of_input">
                <div className="CS_tagline">
                    <h1>Discover and Find the <br/><s>Best</s>
                        <p>Right</p> College
                    </h1>
                </div>

                <div id="HomeSearchbarSnippet">
                    <div id="mobileHomeSearch">
                        Search by Course, Location...
                    </div>
                </div>

                <div className="popularCollegeSearch">
                    <p>Popular Colleges by Courses:</p>
                    <div className="pop_clg_link">
                        <a href="engineering-colleges-india.html">B.tech</a>
                        <a href="bsc-colleges-india.html">B.Sc</a>
                        <a href="commerce-colleges-india.html">B.com</a>
                        <a href="bba-colleges-india.html">BBA</a>
                        <a href="bca-colleges-india.html">BCA</a>
                        <a href="arts-colleges-india.html">BA</a>
                        <a href="mba-colleges-india.html">MBA</a>
                        <a href="law-colleges-india.html">LLB</a>
                        <a href="mca-colleges-india.html">MCA</a>
                        <a href="bpharm-colleges-india.html">B.Pharm</a>
                    </div>
                </div>
            </div>


        </div>

        <div id="preferredCourseSection">
            <div className="container" id="choose_course">
                <h2>Your Prefered Course <span id="edit_preferred_course" className="open-modal"
                        data-modal="preferredCourseModal">Edit</span></h2>
                <div className="chooseCourse">
                    <p>Course
                        <span>MBA/PGDM</span>
                    </p>
                    <p>Location
                        <span>Gurgaon</span>
                    </p>
                </div>

                <div id="preferredCourseModal" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p>Update Preference</p>
                            <span className="close">&times;</span>
                        </div>
                        <div className="modal-body">
                            <p>Preferred Course</p>
                            <span>Update your preferred course to tailor your college search
                                journey.</span>


                            {/* <form action="#" id="preferredCourseForm">
                                <div className="input_group_icon course_input">
                                    <input name="course" type="text" placeholder="Select Your Course"
                                        id="choosen_course">
                                </div>

                                <div id="course_search_box" className="select_searchbox">
                                    <div className="search_wrap">
                                        <div className="search_wrap_input">
                                            <input type="text" className="search_top_input" id="list_search_input"
                                                placeholder="Search...">
                                        </div>
                                        <div className="search_wrap_close"></div>
                                    </div>
                                    <div className="search_data">
                                        <ul className="search_list" id="inst_course">
                                            <li value="2">BBA / BBM / BBS</li>
                                            <li value="1">B.com</li>
                                            <li value="4">msc</li>
                                            <li value="6"> mBBS</li>
                                            <li value="8">bba</li>
                                            <li value="7">aBBMS</li>
                                            <li value="9">bdsm</li>
                                        </ul>
                                    </div>
                                </div>

                                <button type="submit" className="">Save</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" id="Explore_course">
                <h2>Explore Courses</h2>

                <div className="tabs_btn_wrap">

                    <div className="tab-button active_tab" data-tab="degree_1">
                        UG
                    </div>

                    <div className="tab-button " data-tab="degree_2">
                        PG
                    </div>

                    <div className="tab-button " data-tab="degree_3">
                        Diploma
                    </div>
                </div>

                <div className="tabs_content_wrapper">
                    <div className="tab-content active" id="degree_1">
                        <div className="explore_course_wrap">
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/engineering.html" className="course_name">B.Tech / B.E.</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>4 Years</p>
                                    <p><span>Colleges</span><br/>24057</p>
                                    <p><span>Related Exams</span><br/>31</p>
                                </div>
                                <a href="course/engineering.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/medical.html" className="course_name">MBBS</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>5 Years</p>
                                    <p><span>Colleges</span><br/>449</p>
                                    <p><span>Related Exams</span><br/>1</p>
                                </div>
                                <a href="course/medical.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/law.html" className="course_name">LLB</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>1433</p>
                                    <p><span>Related Exams</span><br/>6</p>
                                </div>
                                <a href="course/law.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/bba.html" className="course_name">BBA / BBM / BBS</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>6133</p>
                                    <p><span>Related Exams</span><br/>2</p>
                                </div>
                                <a href="course/bba.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/integrated-law.html" className="course_name">Integrated Law</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>5 Years</p>
                                    <p><span>Colleges</span><br/>872</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/integrated-law.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/bpharm.html" className="course_name">B.Pharm</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>4 Years</p>
                                    <p><span>Colleges</span><br/>2373</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/bpharm.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/bhm.html" className="course_name">BHM</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>786</p>
                                    <p><span>Related Exams</span><br/>2</p>
                                </div>
                                <a href="course/bhm.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/bca.html" className="course_name">BCA</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>4407</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/bca.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/architecture.html" className="course_name">B.Arch</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>5 Years</p>
                                    <p><span>Colleges</span><br/>503</p>
                                    <p><span>Related Exams</span><br/>3</p>
                                </div>
                                <a href="course/architecture.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/arts.html" className="course_name">BA</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>24295</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/arts.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/commerce.html" className="course_name">BCom</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>10342</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/commerce.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/bsc.html" className="course_name">BSc</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>22502</p>
                                    <p><span>Related Exams</span><br/>2</p>
                                </div>
                                <a href="course/bsc.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/b-ed.html" className="course_name">BEd</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>5682</p>
                                    <p><span>Related Exams</span><br/>1</p>
                                </div>
                                <a href="course/b-ed.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/animation-ug.html" className="course_name">Animation - UG</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>72</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/animation-ug.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/fashion-design-ug.html" className="course_name">Fashion Design - UG</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>367</p>
                                    <p><span>Related Exams</span><br/>1</p>
                                </div>
                                <a href="course/fashion-design-ug.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/design-ug.html" className="course_name">Bachelor Of Design</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>1090</p>
                                    <p><span>Related Exams</span><br/>1</p>
                                </div>
                                <a href="course/design-ug.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/bsw.html" className="course_name">Bachelor of Social Work</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>156</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/bsw.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/dental.html" className="course_name">BDS</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>5 Years</p>
                                    <p><span>Colleges</span><br/>319</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/dental.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/physiotherapy.html" className="course_name">Bachelor of Physiotherapy
                                    (BPT)</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>4 Years</p>
                                    <p><span>Colleges</span><br/>402</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/physiotherapy.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/bams.html" className="course_name">B.A.M.S</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>5 Years</p>
                                    <p><span>Colleges</span><br/>49</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/bams.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/mass-communication.html" className="course_name">Mass-Communication</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>330</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/mass-communication.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/CA.html" className="course_name">Chartered Accountancy</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>5 Years</p>
                                    <p><span>Colleges</span><br/>1</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/CA.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/nursing.html" className="course_name">Nursing</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>162</p>
                                    <p><span>Related Exams</span><br/>1</p>
                                </div>
                                <a href="course/nursing.html">View Course Overview &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content " id="degree_2">
                        <div className="explore_course_wrap">
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/mba.html" className="course_name">MBA / PGDM</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>12518</p>
                                    <p><span>Related Exams</span><br/>21</p>
                                </div>
                                <a href="course/mba.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/mca.html" className="course_name">MCA / MCM</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>2851</p>
                                    <p><span>Related Exams</span><br/>6</p>
                                </div>
                                <a href="course/mca.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/mtech.html" className="course_name">M.Tech / M.E.</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>9786</p>
                                    <p><span>Related Exams</span><br/>2</p>
                                </div>
                                <a href="course/mtech.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/mpharm.html" className="course_name">M.Pharm</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>2644</p>
                                    <p><span>Related Exams</span><br/>1</p>
                                </div>
                                <a href="course/mpharm.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/march.html" className="course_name">M.Arch</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>166</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/march.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/llm.html" className="course_name">LLM</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>807</p>
                                    <p><span>Related Exams</span><br/>1</p>
                                </div>
                                <a href="course/llm.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/ma.html" className="course_name">MA</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>10247</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/ma.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/mcom.html" className="course_name">MCom</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>2940</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/mcom.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/msc.html" className="course_name">MSc</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>11689</p>
                                    <p><span>Related Exams</span><br/>2</p>
                                </div>
                                <a href="course/msc.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/m-ed.html" className="course_name">MEd</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>302</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/m-ed.html">View Course Overview &gt;</a>
                            </div>
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/mpt.html" className="course_name">MPT</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>2 Years</p>
                                    <p><span>Colleges</span><br/>326</p>
                                    <p><span>Related Exams</span><br/>0</p>
                                </div>
                                <a href="course/mpt.html">View Course Overview &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content " id="degree_3">
                        <div className="explore_course_wrap">
                            <div className="explore_course_div">
                                <p className="course_logo"></p>
                                <a href="course/polytechnic.html" className="course_name">Polytechnic Course</a>
                                <div className="course_data_div">
                                    <p><span>Duration</span><br/>3 Years</p>
                                    <p><span>Colleges</span><br/>1215</p>
                                    <p><span>Related Exams</span><br/>2</p>
                                </div>
                                <a href="course/polytechnic.html">View Course Overview &gt;</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="container">
            <div id="upcomingExamWrapper">
                <h2 className="tech_h2">Upcoming Exams</h2>
                <div className="upcomingExamWrapperClass scrollable-element">

                    <a href="exams/cat.html" className="upcomingExamWrapperDiv">
                        <img src="https://d13loartjoc1yn.cloudfront.net/upload/exam/1744099053cat logo.webp"
                            alt="CAT Exam"/>
                        <p>CAT </p>
                        <span className="course_text">MBA / PGDM</span>
                        <span> Exam Date </span>
                        <b> 30th November, 2025</b>
                    </a>

                    <a href="exams/snap.html" className="upcomingExamWrapperDiv">
                        <img src="https://d13loartjoc1yn.cloudfront.net/upload/exam/240809125255_snap_logo.webp"
                            alt="SNAP Exam"/>
                        <p>SNAP </p>
                        <span className="course_text">MBA / PGDM</span>
                        <span> Exam Date </span>
                        <b> 06th December, 2025</b>
                    </a>

                    <a href="exams/clat.html" className="upcomingExamWrapperDiv">
                        <img src="https://d13loartjoc1yn.cloudfront.net/upload/exam/240829060143_clat_logo.webp"
                            alt="CLAT Exam"/>
                        <p>CLAT </p>
                        <span className="course_text">LLB</span>
                        <span> Exam Date </span>
                        <b> 07th December, 2025</b>
                    </a>

                    <a href="exams/ailet.html" className="upcomingExamWrapperDiv">
                        <img src="https://d13loartjoc1yn.cloudfront.net/upload/exam/1755689202AILET Logo.webp"
                            alt="AILET Exam"/>
                        <p>AILET </p>
                        <span className="course_text">LLB</span>
                        <span> Exam Date </span>
                        <b> 14th December, 2025</b>
                    </a>

                    <a href="exams/xat.html" className="upcomingExamWrapperDiv">
                        <img src="https://d13loartjoc1yn.cloudfront.net/upload/exam/240809124905_xat_logo.webp"
                            alt="XAT Exam"/>
                        <p>XAT </p>
                        <span className="course_text">MBA / PGDM</span>
                        <span> Exam Date </span>
                        <b> 04th January, 2026</b>
                    </a>

                    <a href="exams/gate.html" className="upcomingExamWrapperDiv">
                        <img src="https://d13loartjoc1yn.cloudfront.net/upload/exam/1755501184GATE 2026 IITG.webp"
                            alt="GATE Exam"/>
                        <p>GATE </p>
                        <span className="course_text">M.Tech / M.E.</span>
                        <span> Exam Date </span>
                        <b> 08th February, 2026</b>
                    </a>

                    <a href="exams/iit-jam.html" className="upcomingExamWrapperDiv">
                        <img src="https://d13loartjoc1yn.cloudfront.net/upload/exam/1756811357IIT JAM 2026 IITB.webp"
                            alt="IIT JAM Exam"/>
                        <p>IIT JAM </p>
                        <span className="course_text">MSc</span>
                        <span> Exam Date </span>
                        <b> 15th February, 2026</b>
                    </a>
                </div>
            </div>

            <h2 className="tech_h2">Latest Articles</h2>
            <div className="box_articles_wrap">

                <div className="box_articles_div">
                    <a href="articles/chandigarh-university-up-joint-placement-drive-2025-uni.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>University</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/chandigarh-university-up-joint-placement-drive-2025-uni.html"
                            className="mainLink">CU UP First-Year Joint Placements with Tata &amp; Dentsu</a>
                        <span>Chandigarh University UP&#039;s first joint placement drive features Tata Electronics (up
                            to ₹6 LPA for B.Tech/B.Sc) &amp; Dentsu International (₹5 LPA for various streams). Explore
                            roles for 2023-2025 batches.</span>
                        <b>By - Nisha Gupta</b>
                        <a href="articles/chandigarh-university-up-joint-placement-drive-2025-uni.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="articles/niyojit-teacher-salary-per-month-bihar.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>Other_category</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 1
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/niyojit-teacher-salary-per-month-bihar.html" className="mainLink">Niyojit Teacher
                            Salary Per Month in Bihar 2025: बिहार नियोजित शिक्षक वेतन संरचना, भत्ते और लाभ</a>
                        <span>जानिए बिहार में नियोजित शिक्षकों के वेतन, भत्तों और लाभों के बारे में विस्तृत जानकारी –
                            प्राथमिक से लेकर उच्च माध्यमिक स्तर तक।</span>
                        <b>By - Suman Saurav</b>
                        <a href="articles/niyojit-teacher-salary-per-month-bihar.html" className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="articles/how-to-analyse-jee-main-mock-test-exm.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 3
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/how-to-analyse-jee-main-mock-test-exm.html" className="mainLink">JEE Main Mock
                            Test Analysis 2026: Your Guide to Higher Scores</a>
                        <span>Master JEE Main mock test analysis for 2026. Learn effective strategies to identify
                            mistakes, track performance, &amp; optimize your preparation. Improve your scores &amp;
                            avoid common errors!</span>
                        <b>By - Tushar</b>
                        <a href="articles/how-to-analyse-jee-main-mock-test-exm.html" className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="articles/clat-helpline-number-official-support-and-guidelines-exm.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 4
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/clat-helpline-number-official-support-and-guidelines-exm.html"
                            className="mainLink">CLAT Helpline Number 2026: Official Contact Details, Support Information,
                            and Assistance Guide</a>
                        <span>Get the official CLAT Helpline Number 2026 and email support to resolve all your exam
                            queries. Covers registration, admit card, payment &amp; more for 24 NLUs. Contact
                            now!</span>
                        <b>By - Ridhima Jindal</b>
                        <a href="articles/clat-helpline-number-official-support-and-guidelines-exm.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="articles/gujarat-anganwadi-salary.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>Other_category</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 6
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/gujarat-anganwadi-salary.html" className="mainLink">Gujarat Anganwadi Salary Per
                            Month 2025: Monthly Honorarium for Workers and Helpers</a>
                        <span>Gujarat Anganwadi worker salary is Rs.11,500. Mini Anganwadi worker salary is Rs.65,00.
                            Anganwadi helper salary is Rs.4,839. Check complete details below.</span>
                        <b>By - Suman Saurav</b>
                        <a href="articles/gujarat-anganwadi-salary.html" className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="articles/anganwadi-teacher-salary-per-month.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>Other_category</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 8
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/anganwadi-teacher-salary-per-month.html" className="mainLink">Anganwadi Teacher
                            Salary in India: State-wise Per Month Salary 2025</a>
                        <span>Anganwadi Teacher Salary in India varies across different states. In General, Anganwadi
                            teachers, often called workers or mini‑workers across India typically earn between
                            Rs.8,000–Rs.15,000 per month in 2025, depending on the state and specific role, with helpers
                            drawing Rs.4,500–Rs.8,500 per month.</span>
                        <b>By - Suman Saurav</b>
                        <a href="articles/anganwadi-teacher-salary-per-month.html" className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="articles/upsc-indian-statistical-service-salary-career-job-profile.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>Other_category</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 6
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/upsc-indian-statistical-service-salary-career-job-profile.html"
                            className="mainLink">UPSC Indian Statistical Service Salary and Job Profile 2025</a>
                        <span>Discover the UPSC Indian Statistical Service (ISS) Salary and Job Profile 2025—learn about
                            pay scale, in-hand salary, allowances, career growth, and promotion structure. Know the
                            roles, responsibilities, and benefits of an ISS officer in India.</span>
                        <b>By - Suman Saurav</b>
                        <a href="articles/upsc-indian-statistical-service-salary-career-job-profile.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="articles/bitsat-sample-paper-exm.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 4
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="articles/bitsat-sample-paper-exm.html" className="mainLink">BITSAT Sample Paper</a>
                        <span>Candidates can review the BITSAT sample paper with solutions PDF online while preparing
                            for the BITS entrance exam. The BITSAT sample papers are beneficial for a thorough BITSAT
                            exam preparation.</span>
                        <b>By - Ravi Upadhyay</b>
                        <a href="articles/bitsat-sample-paper-exm.html" className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>
            </div>

            <h2 className="tech_h2">Latest News</h2>
            <div className="box_articles_wrap">

                <div className="box_articles_div">
                    <a href="news/cat-2025-application-correction-window-active-now-exm.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/cat-2025-application-correction-window-active-now-exm.html" className="mainLink">CAT
                            2025 Application Correction Window: Your Guide to Editing Forms</a>
                        <span>The CAT 2025 application correction window is open from Sep 28-30, 2025. Learn how to edit
                            your form (photo, signature, test city) with our step-by-step guide. Check editable fields
                            and deadlines now.</span>
                        <b>By - Tushar</b>
                        <a href="news/cat-2025-application-correction-window-active-now-exm.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="news/jkbose-class-10-date-sheet-2025-syllabus-relaxation.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>Board</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/jkbose-class-10-date-sheet-2025-syllabus-relaxation.html" className="mainLink">JKBOSE
                            Class 10 Date Sheet 2025 &amp; Syllabus Relaxation Released</a>
                        <span>JKBOSE Class 10 Date Sheet for Oct-Nov 2025 exams (Nov 3-27) released for Kashmir
                            Division. Get 15% syllabus relaxation details for Class 10, 11, 12. Plan your prep!</span>
                        <b>By - Akansha</b>
                        <a href="news/jkbose-class-10-date-sheet-2025-syllabus-relaxation.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="news/cuet-ug-2026-dates-registration-documents-required.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/cuet-ug-2026-dates-registration-documents-required.html" className="mainLink">CUET UG
                            2026 Dates, Registration, &amp; Past Year Trends</a>
                        <span>Find the tentative CUET UG 2026 exam dates, registration schedule, and past year trends.
                            Registrations begin March 2026; exam in May-June 2026. Get all CUET 2026 updates.</span>
                        <b>By - Ridhima Jindal</b>
                        <a href="news/cuet-ug-2026-dates-registration-documents-required.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="news/gate-2026-registration-last-day-today-fill-the-form-without-late-fees.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/gate-2026-registration-last-day-today-fill-the-form-without-late-fees.html"
                            className="mainLink">GATE 2026 Registration Last Day Today, Fill GATE form without Late Fees</a>
                        <span>GATE 2026 registration closes today, Oct 6, at 5 PM! Complete your application form or pay
                            late fees till Oct 9. Don&#039;t miss GATE 2026 exam dates: Feb 7-15. Apply now!</span>
                        <b>By - Ridhima Jindal</b>
                        <a href="news/gate-2026-registration-last-day-today-fill-the-form-without-late-fees.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="news/bitsat-exam-2024.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 1
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/bitsat-exam-2024.html" className="mainLink">BITSAT 2024: BITS Engineering Shift 2 Exam
                            Begins</a>
                        <span>BITS Pilani has completed the BITS Admission Test 2024 (BITSAT) for May 20. The exam was
                            conducted in two shifts, each lasting 3 hours. The first shift took place from 9 AM to 12
                            PM, while the second shift was held from 2 PM to 5 PM.</span>
                        <b>By - Ravi Upadhyay</b>
                        <a href="news/bitsat-exam-2024.html" className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="news/bitsat-iteration-1-allotment-result-2024-to-be-released-today-july-8.html">
                        <div className="date_img_wrap exam_article">
                            <div className="tag_and_date">
                                <span>Exam</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/bitsat-iteration-1-allotment-result-2024-to-be-released-today-july-8.html"
                            className="mainLink">BITSAT Iteration 1 Allotment Result 2024 to be Released Today, July 8</a>
                        <span>On July 8, 2024, Birla Institute of Technology and Science Pilani will make the BITSAT
                            2024 Iteration 1 Result available on bitsadmission.com, its official website.</span>
                        <b>By - Ravi Upadhyay</b>
                        <a href="news/bitsat-iteration-1-allotment-result-2024-to-be-released-today-july-8.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="news/cbse-class-10-exam-2026-flexibility-sports-olympiads.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>Board</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/cbse-class-10-exam-2026-flexibility-sports-olympiads.html" className="mainLink">CBSE
                            Class 10 Board Exam 2026: Special Provision for Sports and Olympiad Participants</a>
                        <span>CBSE unveils Class 10 Board Exam 2026 policy: Two-phase exams offer flexibility for
                            students in sports &amp; Olympiads. Understand new compartment rules &amp; Sept 30, 2025
                            deadline.</span>
                        <b>By - Akansha</b>
                        <a href="news/cbse-class-10-exam-2026-flexibility-sports-olympiads.html"
                            className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>

                <div className="box_articles_div">
                    <a href="news/ap-ssc-time-table-2026-download.html">
                        <div className="date_img_wrap trending_article">
                            <div className="tag_and_date">
                                <span>Board</span>
                                <p> 06th October, 2025
                                    <b>
                                        , 2
                                        min read</b>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="main_content_news_article">
                        <a href="news/ap-ssc-time-table-2026-download.html" className="mainLink">AP SSC Time Table 2026
                            Expected Soon: Exams Likely Held in April</a>
                        <span>Get the latest updates on AP SSC Time Table 2026. Find the official release date and learn
                            how to download the BSEAP Class 10th exam date sheet PDF from bse.ap.gov.in.</span>
                        <b>By - Akansha</b>
                        <a href="news/ap-ssc-time-table-2026-download.html" className="news_read_more">Read More
                            &gt; </a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="footer_linking">
        <div className="container">
            <span>Popular Searches</span>
            <div className="" id="desktop_footer_linking">

                <div className="according_inner_wrap">
                    <div className="accordion_div">
                        <p className="accordion">Popular Colleges </p>
                        <div className="panel">
                            <div className="panel">
                                <a href="university/manipal-university-jaipur.html">Manipal University Jaipur</a>
                                <a href="university/kr-mangalam-university-gurgaon.html">K R Mangalam University</a>
                                <a href="colleges/ibs-business-school-hyderabad.html">IBS Hyderabad</a>
                                <a href="colleges/amity-university-mumbai-mumbai.html">Amity University Mumbai</a>
                                <a href="colleges/sage-university-bhopal-bhopal.html">SAGE University</a>
                                <a href="colleges/indian-institute-of-technology-bombay-iit-bombay-mumbai.html">IIT
                                    Bombay</a>
                                <a href="colleges/indian-institute-of-technology-iit-delhi.html">IIT Delhi</a>
                            </div>
                        </div>


                    </div>
                    <div className="accordion_div">
                        <p className="accordion">New Age Colleges </p>
                        <div className="panel">
                            <div className="panel">
                                <a href="colleges/newtons-institute-of-engineering-guntur.html">Newton School</a>
                                <a href="colleges/scaler-academy.html">Scaler School of Technology</a>
                                <a href="colleges/masters-union-gurgaon.html">Master union school of business</a>
                                <a href="colleges/mirai-school-of-technology.html">Mirai School of Technology</a>
                                <a href="colleges/vedam-school-of-technology.html">Vedam School of Technology</a>

                            </div>
                        </div>


                    </div>
                </div>

                <div className="accordion_div">
                    <p className="accordion">Courses </p>
                    <div className="panel">
                        <a href="course/mba-finance.html">MBA in Finance</a>
                        <a href="course/mba-human-resources.html">MBA in HR</a>
                        <a href="course/mba-business-analytics.html">MBA Business Analytics</a>
                        <a href="course/mba-marketing.html">MBA Marketing</a>
                        <a href="course/btech-biotechnology.html">B.Tech Biotechnology</a>
                        <a href="course/btech-mechanical-engineering.html">B.Tech Mechanical Engineering</a>
                        <a href="course/btech-civil-engineering.html">B.Tech Civil Engineering</a>
                        <a href="course/btech-electrical-engineering.html">B.Tech Electrical Engineering</a>
                        <a href="course/bsc-nursing.html">BSc Nursing</a>
                        <a href="course/bsc-computer-science.html">BSc Computer Science</a>
                        <a href="course/bsc-agriculture.html">BSc Agriculture</a>
                        <a href="course/bsc-biotechnology.html">BSc Biotechnology</a>
                    </div>
                </div>

                <div className="accordion_div">
                    <p className="accordion">Entrance Exams</p>
                    <div className="panel">
                        <a href="exams/cat.html">CAT Exam</a>
                        <a href="exams/gate.html">GATE Exam</a>
                        <a href="exams/clat.html">CLAT Exam</a>
                        <a href="exams/neet-pg.html">NEET PG Exam</a>
                        <a href="exams/mat.html">MAT Exam</a>
                        <a href="exams/jee-main.html">JEE Main Exam</a>
                        <a href="exams/snap.html">SNAP Exam</a>
                        <a href="exams/xat.html">XAT Exam</a>
                        <a href="exams/neet.html">NEET UG Exam</a>
                        <a href="exams/bitsat.html">BITSAT Exam</a>
                        <a href="exams/cat-preparation-tips.html">CAT Preparation Tips</a>
                        <a href="exams/cat-exam-pattern.html">CAT Exam Pattern</a>
                    </div>
                </div>

                <div className="accordion_div">
                    <p className="accordion">Resources </p>

                    <div className="panel">
                        <a href="articles/cbse-12th-syllabus-2026-released-free-pdf-download.html">CBSE 12th
                            Syllabus</a>
                        <a href="articles/cat-study-material-exm.html">CAT Study Material</a>
                        <a href="exams/jee-main-question-papers.html">JEE Main Question Paper</a>
                        <a href="exams/jee-main-answer-key.html">JEE Main Answer Key</a>
                        <a href="articles/how-to-apply-for-pm-scholarship.html">PM Scholarship</a>
                        <a href="articles/inspire-scholarship.html">INSPIRE Scholarship</a>
                        <a href="articles/odisha-scholarships.html">Odisha Scholarship</a>
                        <a href="articles/canara-bank-scholarship.html">Canara Bank Scholarship</a>
                        <a href="boards/maharashtra-hsc-board.html">Maharashtra HSC</a>
                        <a href="boards/icse-10th-board.html">ICSE Board</a>
                        <a href="boards/odisha-chse-12th.html">Odisha CHSE</a>
                        <a href="boards/jac-12th-board.html">JAC 12th Board</a>
                        <a href="internships.html">Internships for Students</a>
                        <a href="jobs.html">Jobs for Students</a>
                    </div>


                </div>


                <div className="according_inner_wrap">
                    <div className="accordion_div">
                        <p className="accordion">Tools & Predictors </p>
                        <div className="panel">
                            <div className="panel">
                                <a href="predictor/gate-rank-predictor.html">GATE Rank Predictor</a>
                                <a href="predictor/jee-main-rank-predictor.html">JEE Main Rank Predictor</a>
                                <a href="predictor/kcet-rank-predictor.html">KCET Rank Predictor</a>
                                <a
                                    href="news/cat-2024-percentile-predictor-predict-and-check-your-cat-2024-score-now.html">CAT
                                    Percentile Predictor</a>
                                <a href="predictor/jee-main-percentile-predictor.html">JEE Main Percentile Predictor</a>
                                <a href="college-predictor/jee-advanced-college-predictor.html">JEE Advanced College
                                    Predictor</a>
                                <a href="predictor/comedk-uget-rank-predictor.html">COMEDK Rank Predictor</a>
                            </div>
                        </div>


                    </div>
                    <div className="accordion_div">
                        <p className="accordion">College Admission Forms </p>
                        <div className="panel">
                            <div className="panel">
                                <a href="https://admitquest.ai/colleges/mba-punjab?utm_source=collegesearch&amp;utm_medium=footer"
                                    target='_blank'>MBA Admission in Punjab</a>
                                <a href="https://admitquest.ai/colleges/engineering-uttar-pradesh?utm_source=collegesearch&amp;utm_medium=footer"
                                    target='_blank'>BTech Admissions in Uttar Pradesh</a>
                                <a href="https://admitquest.ai/colleges/engineering-maharashtra?utm_source=collegesearch&amp;utm_medium=footer"
                                    target='_blank'>BTech Admissions in Maharashtra</a>
                                <a href="https://admitquest.ai/colleges/engineering-tamil-nadu?utm_source=collegesearch&amp;utm_medium=footer"
                                    target='_blank'>BTech Admissions in Tamil Nadu</a>
                                <a href="https://admitquest.ai/colleges/engineering-haryana?utm_source=collegesearch&amp;utm_medium=footer"
                                    target='_blank'>BTech Admissions in Haryana</a>

                            </div>

                        </div>


                    </div>
                </div>


            </div>
        </div>
    </div>
    <div id="successModal" className="modal reloadWindow">
        <div className="modal-content">
            <div className="modal-header">
                <p className="modal-title" id="modal_clg_logo"></p>
                <span className="close">&times;</span>
            </div>
            <div className="modal-body">
                <p className="successIcon"></p>
                <p className="successHeading">Registered Successfully</p>
                <p className="successText">Now you can download brochures, get expert counseling and submit applications
                    hassle-free. Your college hunt journey begins now!</p>
                <p className="successcourseText"></p>

                <div className="redirect-wrap" id="redirectWrap">
                    <p className="redirectText">
                        Redirecting in <span id="countdown">10</span> seconds… <span className="loader"></span>
                    </p>

                </div>
                <div className="applynow_btn_wrap" id="admitQuest">
                    <a href="#" target="_blank" id="applyNowLink" className="btn applynow_btn">Apply Now via <img
                            src="build/assets/admitquestLogo-C9IGcvDE.png"/> </a>
                    <a href="#" className="btn closenow_btn" id="closebtn">Close </a>
                </div>

            </div>
        </div>
    </div>
   <Footer/>
    </main>
  )
}
