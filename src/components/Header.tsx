'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header id="universalHeader" className="checking">
            <div className="headerBarWrapper">
                <div id="headerAddressBar">

                    <div className="CS_contact_details">
                        <Link href="tel:+919228151258" >+9192281 51258</Link>
                        <Link href="mailto:info@collegesearch.in" >info@collegesearch.in</Link>
                    </div>

                    <div className="moduleNavigation">
                        <Link href="exams" >Exams</Link>
                        <Link href="boards" >Boards</Link>
                        <Link href="scholarships" >Scholarships</Link>
                        <Link href="admissionform" >Admission 2025</Link>
                        <Link href="counselling" >Counselling</Link>
                        <Link href="internships" >Internships</Link>
                        <Link href="jobs" >Jobs</Link>
                    </div>
                    <div className="socialNavigation">
                        <div className="social_right">
                            <Link href="https://www.facebook.com/CollegeSearch?fref=ts" target="_blank" className="" ></Link>
                            <Link href="https://twitter.com/india_colleges" target="_blank" className="twitter" ></Link>
                            <Link href="https://www.linkedin.com/school/indiacollegesearch" target="_blank" className="linkedin"
                                ></Link>                            <Link href="https://www.instagram.com/collegesearch_in/" target="_blank" className="instagram" ></Link>
                        </div>
                    </div>
                </div>

                <div id="headernavigationBar">
                    <div className="logo_and_navigation_wrap">

                        <div className="hamburger_menu_wrap">
                            <span className="hamburger_menu"></span>
                        </div>

                         <Link href="/" className="CS_HeaderLogo">
      <Image
        src="/build/assets/logo.png"
        alt="Mythri Logo"
        width={180}
        height={32}
        className="logo-img"
        priority
      />
    </Link>

                        <div className="navigation_wrapper visible_side_nav">
                            <div className="sidenav_closer">
                                <Link href="/" ></Link>
                                <span className="close_sidenav"></span>
                            </div>
                            <div className="navigation_div">
                                <p className="nav_main_heading">Explore Courses</p>
                                <div className="navigation_content">
                                    <p className="hide_right_navigation"><span className="hide_sidenav">← &nbsp;
                                        Explore Courses</span></p>
                                    <div className="left_navigation">

                                        <p data-id="0"> BCA<span></span></p>
                                        <p data-id="1"> MCA<span></span></p>
                                        <p data-id="2"> MBBS<span></span></p>
                                        <p data-id="3"> Law<span></span></p>
                                        <p data-id="4"> B.Pharm<span></span></p>
                                        <p data-id="5"> M.Pharm<span></span></p>
                                        <p data-id="6"> Hotel Management<span></span></p>
                                        <p data-id="7"> B.Arch<span></span></p>
                                        <p data-id="8"> M.Arch<span></span></p>
                                        <p data-id="9"> MD<span></span></p>
                                        <p data-id="10"> B.Des<span></span></p>
                                        <p data-id="11"> BA<span></span></p>
                                        <p data-id="12"> MA<span></span></p>
                                    </div>
                                    <div className="right_navigation">
                                        <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                            Explore
                                            Courses</p>
                                        <div className="parent_wrapper explore_course" data-id="0">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/bca.html" >Bachelor Of Computer Application</Link>
                                                <Link href="bca-colleges-india.html" >BCA Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="bca/colleges-bangalore.html" >BCA
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="bca/colleges-delhi-ncr.html" >BCA
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="bca/colleges-greater-noida.html" >BCA
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="bca/colleges-pune.html" >BCA
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="bca/colleges-indore.html" >BCA
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="bca/colleges-mumbai.html" >BCA
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="bca/colleges-punjab.html" >BCA
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="bca/colleges-uttar-pradesh.html" >BCA
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="bca/colleges-maharashtra.html" >BCA
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="bca/colleges-west-bengal.html" >BCA
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="bca/colleges-tamil-nadu.html" >BCA
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="bca/colleges-madhya-pradesh.html" >BCA
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/nimcet.html" >NIMCET</Link>
                                                <Link href="exams/cuet.html" >CUET</Link>
                                                <Link href="exams/ggsipu-cet.html" >IPU CET</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="1">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/mca.html" >Master Of Computer Application</Link>
                                                <Link href="mca-colleges-india.html" >MCA Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="mca/colleges-bangalore.html" >MCA
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="mca/colleges-delhi-ncr.html" >MCA
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="mca/colleges-greater-noida.html" >MCA
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="mca/colleges-pune.html" >MCA
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="mca/colleges-indore.html" >MCA
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="mca/colleges-mumbai.html" >MCA
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="mca/colleges-punjab.html" >MCA
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="mca/colleges-uttar-pradesh.html" >MCA
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="mca/colleges-maharashtra.html" >MCA
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="mca/colleges-west-bengal.html" >MCA
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="mca/colleges-tamil-nadu.html" >MCA
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="mca/colleges-madhya-pradesh.html" >MCA
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/nimcet.html" >NIMCET</Link>
                                                <Link href="exams/gate.html" >GATE</Link>
                                                <Link href="exams/tancet.html" >TANCET</Link>
                                                <Link href="exams/iit-jam.html" >IIT JAM</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="2">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/medical.html" >Bachelor Of Medicine</Link>
                                                <Link href="medical-colleges-india.html" >MBBS Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="medical/colleges-bangalore.html" >MBBS
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="medical/colleges-delhi-ncr.html" >MBBS
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="medical/colleges-greater-noida.html" >MBBS
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="medical/colleges-pune.html" >MBBS
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="medical/colleges-indore.html" >MBBS
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="medical/colleges-mumbai.html" >MBBS
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="medical/colleges-punjab.html" >MBBS
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="medical/colleges-uttar-pradesh.html" >MBBS
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="medical/colleges-maharashtra.html" >MBBS
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="medical/colleges-west-bengal.html" >MBBS
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="medical/colleges-tamil-nadu.html" >MBBS
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="medical/colleges-madhya-pradesh.html" >MBBS
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/neet.html" >NEET UG</Link>
                                                <Link href="exams/upsee.html" >UPSEE</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="3">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/law.html" >Bachelor Of Laws</Link>
                                                <Link href="law-colleges-india.html" >Law Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="law/colleges-bangalore.html" >Law
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="law/colleges-delhi-ncr.html" >Law
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="law/colleges-greater-noida.html" >Law
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="law/colleges-pune.html" >Law
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="law/colleges-indore.html" >Law
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="law/colleges-mumbai.html" >Law
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="law/colleges-punjab.html" >Law
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="law/colleges-uttar-pradesh.html" >Law
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="law/colleges-maharashtra.html" >Law
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="law/colleges-west-bengal.html" >Law
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="law/colleges-tamil-nadu.html" >Law
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="law/colleges-madhya-pradesh.html" >Law
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/clat.html" >CLAT</Link>
                                                <Link href="exams/lsat.html" >LSAT</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="4">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/bpharm.html" >Bachelor Of Pharmacy</Link>
                                                <Link href="bpharm-colleges-india.html" >B.Pharm Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="bpharm/colleges-bangalore.html" >B.Pharm
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="bpharm/colleges-delhi-ncr.html" >B.Pharm
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="bpharm/colleges-greater-noida.html" >B.Pharm
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="bpharm/colleges-pune.html" >B.Pharm
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="bpharm/colleges-indore.html" >B.Pharm
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="bpharm/colleges-mumbai.html" >B.Pharm
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="bpharm/colleges-punjab.html" >B.Pharm
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="bpharm/colleges-uttar-pradesh.html" >B.Pharm
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="bpharm/colleges-maharashtra.html" >B.Pharm
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="bpharm/colleges-west-bengal.html" >B.Pharm
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="bpharm/colleges-tamil-nadu.html" >B.Pharm
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="bpharm/colleges-madhya-pradesh.html" >B.Pharm
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/gpat.html" >GPAT</Link>
                                                <Link href="exams/cet-punjab.html" >PU CET</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="5">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/mpharm.html" >Master Of Pharmacy</Link>
                                                <Link href="mpharm-colleges-india.html" >M.Pharm Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="mpharm/colleges-bangalore.html" >M.Pharm
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="mpharm/colleges-delhi-ncr.html" >M.Pharm
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="mpharm/colleges-greater-noida.html" >M.Pharm
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="mpharm/colleges-pune.html" >M.Pharm
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="mpharm/colleges-indore.html" >M.Pharm
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="mpharm/colleges-mumbai.html" >M.Pharm
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="mpharm/colleges-punjab.html" >M.Pharm
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="mpharm/colleges-uttar-pradesh.html" >M.Pharm
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="mpharm/colleges-maharashtra.html" >M.Pharm
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="mpharm/colleges-west-bengal.html" >M.Pharm
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="mpharm/colleges-tamil-nadu.html" >M.Pharm
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="mpharm/colleges-madhya-pradesh.html" >M.Pharm
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/gpat.html" >GPAT</Link>
                                                <Link href="exams/cet-punjab.html" >PU CET</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="6">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/bhm.html" >Bachelor Of Hotel Management</Link>
                                                <Link href="bhm-colleges-india.html" >Hotel Management Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="bhm/colleges-bangalore.html" >Hotel Management
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="bhm/colleges-delhi-ncr.html" >Hotel Management
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="bhm/colleges-greater-noida.html" >Hotel Management
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="bhm/colleges-pune.html" >Hotel Management
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="bhm/colleges-indore.html" >Hotel Management
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="bhm/colleges-mumbai.html" >Hotel Management
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="bhm/colleges-punjab.html" >Hotel Management
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="bhm/colleges-uttar-pradesh.html" >Hotel Management
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="bhm/colleges-maharashtra.html" >Hotel Management
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="bhm/colleges-west-bengal.html" >Hotel Management
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="bhm/colleges-tamil-nadu.html" >Hotel Management
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="bhm/colleges-madhya-pradesh.html" >Hotel Management
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/nchmct-jee.html" >NCHM JEE</Link>
                                                <Link href="exams/ugat.html" >AIMA UGAT</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="7">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/architecture.html" >Bachelor Of Architecture</Link>
                                                <Link href="architecture-colleges-india.html" >Hotel Management Colleges In
                                                    India</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="architecture/colleges-bangalore.html" >B.Arch
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="architecture/colleges-delhi-ncr.html" >B.Arch
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="architecture/colleges-greater-noida.html" >B.Arch
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="architecture/colleges-pune.html" >B.Arch
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="architecture/colleges-indore.html" >B.Arch
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="architecture/colleges-mumbai.html" >B.Arch
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="architecture/colleges-punjab.html" >B.Arch
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="architecture/colleges-uttar-pradesh.html" >B.Arch
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="architecture/colleges-maharashtra.html" >B.Arch
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="architecture/colleges-west-bengal.html" >B.Arch
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="architecture/colleges-tamil-nadu.html" >B.Arch
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="architecture/colleges-madhya-pradesh.html" >B.Arch
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/nata.html" >NATA</Link>
                                                <Link href="exams/jee-main.html" >JEE Main</Link>
                                                <Link href="exams/uceed.html" >UCEED</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="8">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/march.html" >Master Of Architecture</Link>
                                                <Link href="march-colleges-india.html" >M.Arch Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="march/colleges-bangalore.html" >M.Arch
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="march/colleges-delhi-ncr.html" >M.Arch
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="march/colleges-greater-noida.html" >M.Arch
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="march/colleges-pune.html" >M.Arch
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="march/colleges-indore.html" >M.Arch
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="march/colleges-mumbai.html" >M.Arch
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="march/colleges-punjab.html" >M.Arch
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="march/colleges-uttar-pradesh.html" >M.Arch
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="march/colleges-maharashtra.html" >M.Arch
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="march/colleges-west-bengal.html" >M.Arch
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="march/colleges-tamil-nadu.html" >M.Arch
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="march/colleges-madhya-pradesh.html" >M.Arch
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/gate.html" >GATE</Link>
                                                <Link href="exams/iit-jam.html" >IIT JAM</Link>
                                                <Link href="exams/uceed.html" >UCEED</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="9">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/md.html" >Doctor Of Medicine</Link>
                                                <Link href="md-colleges-india.html" >MD Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="md/colleges-bangalore.html" >MD
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="md/colleges-delhi-ncr.html" >MD
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="md/colleges-greater-noida.html" >MD
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="md/colleges-pune.html" >MD
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="md/colleges-indore.html" >MD
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="md/colleges-mumbai.html" >MD
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="md/colleges-punjab.html" >MD
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="md/colleges-uttar-pradesh.html" >MD
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="md/colleges-maharashtra.html" >MD
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="md/colleges-west-bengal.html" >MD
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="md/colleges-tamil-nadu.html" >MD
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="md/colleges-madhya-pradesh.html" >MD
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="10">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/design-ug.html" >Bachelor Of Design</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="design-ug/colleges-bangalore.html" >B.Des
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="design-ug/colleges-delhi-ncr.html" >B.Des
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="design-ug/colleges-greater-noida.html" >B.Des
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="design-ug/colleges-pune.html" >B.Des
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="design-ug/colleges-indore.html" >B.Des
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="design-ug/colleges-mumbai.html" >B.Des
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="design-ug/colleges-punjab.html" >B.Des
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="design-ug/colleges-uttar-pradesh.html" >B.Des
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="design-ug/colleges-maharashtra.html" >B.Des
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="design-ug/colleges-west-bengal.html" >B.Des
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="design-ug/colleges-tamil-nadu.html" >B.Des
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="design-ug/colleges-madhya-pradesh.html" >B.Des
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/uceed.html" >UCEED</Link>
                                                <Link href="exams/nift.html" >NIFT</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="11">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/arts.html" >Bachelor Of Arts</Link>
                                                <Link href="arts-colleges-india.html" >BA Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="arts/colleges-bangalore.html" >BA
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="arts/colleges-delhi-ncr.html" >BA
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="arts/colleges-greater-noida.html" >BA
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="arts/colleges-pune.html" >BA
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="arts/colleges-indore.html" >BA
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="arts/colleges-mumbai.html" >BA
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="arts/colleges-punjab.html" >BA
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="arts/colleges-uttar-pradesh.html" >BA
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="arts/colleges-maharashtra.html" >BA
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="arts/colleges-west-bengal.html" >BA
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="arts/colleges-tamil-nadu.html" >BA
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="arts/colleges-madhya-pradesh.html" >BA
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/uceed.html" >UCEED</Link>
                                                <Link href="exams/nift.html" >NIFT</Link>
                                            </div>
                                        </div>
                                        <div className="parent_wrapper explore_course" data-id="12">
                                            <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                                Back to Courses</p>
                                            <div className="type_of_navigation_wrap">
                                                <p>About The Courses</p>
                                                <Link href="course/ma.html" >Master Of Arts</Link>
                                                <Link href="ma-colleges-india.html" >MA Colleges In India</Link>
                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by City</p>
                                                <Link href="ma/colleges-bangalore.html" >MA
                                                    Colleges in
                                                    Bangalore</Link>                                                <Link href="ma/colleges-delhi-ncr.html" >MA
                                                    Colleges in
                                                    Delhi Ncr</Link>                                                <Link href="ma/colleges-greater-noida.html" >MA
                                                    Colleges in
                                                    Greater Noida</Link>                                                <Link href="ma/colleges-pune.html" >MA
                                                    Colleges in
                                                    Pune</Link>                                                <Link href="ma/colleges-indore.html" >MA
                                                    Colleges in
                                                    Indore</Link>                                                <Link href="ma/colleges-mumbai.html" >MA
                                                    Colleges in
                                                    Mumbai</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Colleges by State</p>
                                                <Link href="ma/colleges-punjab.html" >MA
                                                    Colleges in
                                                    Punjab</Link>                                                <Link href="ma/colleges-uttar-pradesh.html" >MA
                                                    Colleges in
                                                    Uttar Pradesh</Link>                                                <Link href="ma/colleges-maharashtra.html" >MA
                                                    Colleges in
                                                    Maharashtra</Link>                                                <Link href="ma/colleges-west-bengal.html" >MA
                                                    Colleges in
                                                    West Bengal</Link>                                                <Link href="ma/colleges-tamil-nadu.html" >MA
                                                    Colleges in
                                                    Tamil Nadu</Link>                                                <Link href="ma/colleges-madhya-pradesh.html" >MA
                                                    Colleges in
                                                    Madhya Pradesh</Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>

                                                <Link href="exams/cuet.html" >CUET</Link>
                                                <Link href="exams/set.html" >SET</Link>
                                                <Link href="exams/cucet-exam.html" >CUCET</Link>
                                                <Link href="exams/ggsipu-cet.html" >IPU CET</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="navigation_div">
                                <p className="nav_main_heading">Management</p>
                                <div className="navigation_content">
                                    <div className="right_navigation">
                                        <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                            Management</p>

                                        <div className="parent_wrapper">
                                            <div className="type_of_navigation_wrap">
                                                <p>Popular Courses</p>
                                                <Link href="course/mba.html" >MBA</Link>
                                                <Link href="course/bba.html" >BBA</Link>
                                            </div>


                                            <div className="type_of_navigation_wrap">
                                                <p>MBA Colleges by City</p>
                                                <Link href="mba/colleges-bangalore.html" >
                                                    MBA/PGDM Colleges in Bangalore
                                                </Link>                                                <Link href="mba/colleges-delhi-ncr.html" >
                                                    MBA/PGDM Colleges in Delhi Ncr
                                                </Link>                                                <Link href="mba/colleges-greater-noida.html" >
                                                    MBA/PGDM Colleges in Greater Noida
                                                </Link>                                                <Link href="mba/colleges-pune.html" >
                                                    MBA/PGDM Colleges in Pune
                                                </Link>                                                <Link href="mba/colleges-indore.html" >
                                                    MBA/PGDM Colleges in Indore
                                                </Link>                                                <Link href="mba/colleges-mumbai.html" >
                                                    MBA/PGDM Colleges in Mumbai
                                                </Link>                                            </div>

                                            <div className="type_of_navigation_wrap">
                                                <p>MBA Colleges by State</p>
                                                <Link href="mba/colleges-punjab.html" >
                                                    MBA/PGDM Colleges in Punjab
                                                </Link>                                                <Link href="mba/colleges-uttar-pradesh.html" >
                                                    MBA/PGDM Colleges in Uttar Pradesh
                                                </Link>                                                <Link href="mba/colleges-maharashtra.html" >
                                                    MBA/PGDM Colleges in Maharashtra
                                                </Link>                                                <Link href="mba/colleges-west-bengal.html" >
                                                    MBA/PGDM Colleges in West Bengal
                                                </Link>                                                <Link href="mba/colleges-tamil-nadu.html" >
                                                    MBA/PGDM Colleges in Tamil Nadu
                                                </Link>                                                <Link href="mba/colleges-madhya-pradesh.html" >
                                                    MBA/PGDM Colleges in Madhya Pradesh
                                                </Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>Related Exams</p>
                                                <Link href="exams/cat.html" >CAT</Link>
                                                <Link href="exams/mat.html" >MAT</Link>
                                                <Link href="exams/xat.html" >XAT</Link>
                                                <Link href="exams/snap.html" >SNAP</Link>
                                                <Link href="exams/cmat.html" >CMAT</Link>
                                                <Link href="exams/nmat.html" >NMAT</Link>
                                                <Link href="exams/ibsat.html" >IBSAT</Link>
                                            </div>

                                            <div className="type_of_navigation_wrap">
                                                <p>BBA Colleges by City</p>
                                                <Link href="bba/colleges-bangalore.html" >
                                                    BBA Colleges in Bangalore
                                                </Link>                                                <Link href="bba/colleges-delhi-ncr.html" >
                                                    BBA Colleges in Delhi Ncr
                                                </Link>                                                <Link href="bba/colleges-greater-noida.html" >
                                                    BBA Colleges in Greater Noida
                                                </Link>                                                <Link href="bba/colleges-pune.html" >
                                                    BBA Colleges in Pune
                                                </Link>                                                <Link href="bba/colleges-indore.html" >
                                                    BBA Colleges in Indore
                                                </Link>                                                <Link href="bba/colleges-mumbai.html" >
                                                    BBA Colleges in Mumbai
                                                </Link>                                            </div>

                                            <div className="type_of_navigation_wrap">
                                                <p>BBA Colleges by State</p>
                                                <Link href="bba/colleges-punjab.html" >
                                                    BBA Colleges in Punjab
                                                </Link>                                                <Link href="bba/colleges-uttar-pradesh.html" >
                                                    BBA Colleges in Uttar Pradesh
                                                </Link>                                                <Link href="bba/colleges-maharashtra.html" >
                                                    BBA Colleges in Maharashtra
                                                </Link>                                                <Link href="bba/colleges-west-bengal.html" >
                                                    BBA Colleges in West Bengal
                                                </Link>                                                <Link href="bba/colleges-tamil-nadu.html" >
                                                    BBA Colleges in Tamil Nadu
                                                </Link>                                                <Link href="bba/colleges-madhya-pradesh.html" >
                                                    BBA Colleges in Madhya Pradesh
                                                </Link>                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation_div">
                                <p className="nav_main_heading">Engineering</p>
                                <div className="navigation_content">
                                    <div className="right_navigation">
                                        <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                            Engineering</p>

                                        <div className="parent_wrapper">
                                            <div className="type_of_navigation_wrap">
                                                <p>Popular Courses</p>
                                                <Link href="course/engineering.html" >Bachelor Of Technology B.Tech</Link>
                                                <Link href="course/mtech.html" >Master Of Technology M.Tech</Link>
                                            </div>

                                            <div className="type_of_navigation_wrap">
                                                <p>B.Tech Colleges by City</p>
                                                <Link href="engineering/colleges-bangalore.html" >
                                                    B.Tech Colleges in Bangalore
                                                </Link>                                                <Link href="engineering/colleges-delhi-ncr.html" >
                                                    B.Tech Colleges in Delhi Ncr
                                                </Link>                                                <Link href="engineering/colleges-greater-noida.html" >
                                                    B.Tech Colleges in Greater Noida
                                                </Link>                                                <Link href="engineering/colleges-pune.html" >
                                                    B.Tech Colleges in Pune
                                                </Link>                                                <Link href="engineering/colleges-indore.html" >
                                                    B.Tech Colleges in Indore
                                                </Link>                                                <Link href="engineering/colleges-mumbai.html" >
                                                    B.Tech Colleges in Mumbai
                                                </Link>                                                <p>M.Tech Colleges by City</p>
                                                <Link href="mtech/colleges-bangalore.html" >
                                                    M.Tech Colleges in Bangalore
                                                </Link>                                                <Link href="mtech/colleges-delhi-ncr.html" >
                                                    M.Tech Colleges in Delhi Ncr
                                                </Link>                                                <Link href="mtech/colleges-greater-noida.html" >
                                                    M.Tech Colleges in Greater Noida
                                                </Link>                                                <Link href="mtech/colleges-pune.html" >
                                                    M.Tech Colleges in Pune
                                                </Link>                                                <Link href="mtech/colleges-indore.html" >
                                                    M.Tech Colleges in Indore
                                                </Link>                                                <Link href="mtech/colleges-mumbai.html" >
                                                    M.Tech Colleges in Mumbai
                                                </Link>                                            </div>
                                            <div className="type_of_navigation_wrap">
                                                <p>B.Tech Colleges by State</p>
                                                <Link href="engineering/colleges-punjab.html" >
                                                    B.Tech Colleges in Punjab
                                                </Link>                                                <Link href="engineering/colleges-uttar-pradesh.html" >
                                                    B.Tech Colleges in Uttar Pradesh
                                                </Link>                                                <Link href="engineering/colleges-maharashtra.html" >
                                                    B.Tech Colleges in Maharashtra
                                                </Link>                                                <Link href="engineering/colleges-west-bengal.html" >
                                                    B.Tech Colleges in West Bengal
                                                </Link>                                                <Link href="engineering/colleges-tamil-nadu.html" >
                                                    B.Tech Colleges in Tamil Nadu
                                                </Link>                                                <Link href="engineering/colleges-madhya-pradesh.html" >
                                                    B.Tech Colleges in Madhya Pradesh
                                                </Link>                                                <p>M.Tech Colleges by State</p>
                                                <Link href="mtech/colleges-punjab.html" >
                                                    M.Tech Colleges in Punjab
                                                </Link>                                                <Link href="mtech/colleges-uttar-pradesh.html" >
                                                    M.Tech Colleges in Uttar Pradesh
                                                </Link>                                                <Link href="mtech/colleges-maharashtra.html" >
                                                    M.Tech Colleges in Maharashtra
                                                </Link>                                                <Link href="mtech/colleges-west-bengal.html" >
                                                    M.Tech Colleges in West Bengal
                                                </Link>                                                <Link href="mtech/colleges-tamil-nadu.html" >
                                                    M.Tech Colleges in Tamil Nadu
                                                </Link>                                                <Link href="mtech/colleges-madhya-pradesh.html" >
                                                    M.Tech Colleges in Madhya Pradesh
                                                </Link>                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation_div">
                                <p className="nav_main_heading">Science</p>
                                <div className="navigation_content">
                                    <div className="right_navigation">
                                        <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                            Science</p>

                                        <div className="parent_wrapper">
                                            <div className="type_of_navigation_wrap">
                                                <p>Popular Courses</p>
                                                <Link href="course/bsc.html" >Bachelor Of Science (B.Sc)</Link>
                                                <Link href="course/msc.html" >Master Of Science (M.Sc)</Link>
                                            </div>

                                            <div className="type_of_navigation_wrap">
                                                <p>B.Sc Colleges by City</p>
                                                <Link href="bsc/colleges-bangalore.html" >
                                                    B.Sc Colleges in Bangalore
                                                </Link>                                                <Link href="bsc/colleges-delhi-ncr.html" >
                                                    B.Sc Colleges in Delhi Ncr
                                                </Link>                                                <Link href="bsc/colleges-greater-noida.html" >
                                                    B.Sc Colleges in Greater Noida
                                                </Link>                                                <Link href="bsc/colleges-pune.html" >
                                                    B.Sc Colleges in Pune
                                                </Link>                                                <Link href="bsc/colleges-indore.html" >
                                                    B.Sc Colleges in Indore
                                                </Link>                                                <Link href="bsc/colleges-mumbai.html" >
                                                    B.Sc Colleges in Mumbai
                                                </Link>                                                <p>M.sc Colleges by City</p>
                                                <Link href="msc/colleges-bangalore.html" >
                                                    M.sc Colleges in Bangalore
                                                </Link>                                                <Link href="msc/colleges-delhi-ncr.html" >
                                                    M.sc Colleges in Delhi Ncr
                                                </Link>                                                <Link href="msc/colleges-greater-noida.html" >
                                                    M.sc Colleges in Greater Noida
                                                </Link>                                                <Link href="msc/colleges-pune.html" >
                                                    M.sc Colleges in Pune
                                                </Link>                                                <Link href="msc/colleges-indore.html" >
                                                    M.sc Colleges in Indore
                                                </Link>                                                <Link href="msc/colleges-mumbai.html" >
                                                    M.sc Colleges in Mumbai
                                                </Link>                                            </div>

                                            <div className="type_of_navigation_wrap">
                                                <p>B.Sc Colleges by State</p>
                                                <Link href="bsc/colleges-punjab.html" >
                                                    B.Sc Colleges in Punjab
                                                </Link>                                                <Link href="bsc/colleges-uttar-pradesh.html" >
                                                    B.Sc Colleges in Uttar Pradesh
                                                </Link>                                                <Link href="bsc/colleges-maharashtra.html" >
                                                    B.Sc Colleges in Maharashtra
                                                </Link>                                                <Link href="bsc/colleges-west-bengal.html" >
                                                    B.Sc Colleges in West Bengal
                                                </Link>                                                <Link href="bsc/colleges-tamil-nadu.html" >
                                                    B.Sc Colleges in Tamil Nadu
                                                </Link>                                                <Link href="bsc/colleges-madhya-pradesh.html" >
                                                    B.Sc Colleges in Madhya Pradesh
                                                </Link>                                                <p>M.sc Colleges by State</p>
                                                <Link href="msc/colleges-punjab.html" >
                                                    M.sc Colleges in Punjab
                                                </Link>                                                <Link href="msc/colleges-uttar-pradesh.html" >
                                                    M.sc Colleges in Uttar Pradesh
                                                </Link>                                                <Link href="msc/colleges-maharashtra.html" >
                                                    M.sc Colleges in Maharashtra
                                                </Link>                                                <Link href="msc/colleges-west-bengal.html" >
                                                    M.sc Colleges in West Bengal
                                                </Link>                                                <Link href="msc/colleges-tamil-nadu.html" >
                                                    M.sc Colleges in Tamil Nadu
                                                </Link>                                                <Link href="msc/colleges-madhya-pradesh.html" >
                                                    M.sc Colleges in Madhya Pradesh
                                                </Link>                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation_div">
                                <p className="nav_main_heading">More</p>
                                <div className="navigation_content">
                                    <div className="right_navigation">
                                        <p className="hide_right_navigation"><span className="hide_sidenav">&larr;</span> &nbsp;
                                            More</p>

                                        <div className="parent_wrapper">
                                            <div className="type_of_navigation_wrap">
                                                <p>More</p>
                                                <Link href="exams.html" >Exams</Link>
                                                <Link href="articles.html" >Latest Articles</Link>
                                                <Link href="news.html" >News & Updates</Link>
                                                <Link href="online-courses.html" >Online Courses</Link>
                                                <Link href="study-abroad.html" >Study Abroad</Link>
                                                <Link href="internships.html" >Internships</Link>
                                                <Link href="jobs.html" >Jobs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation_div visible_in_mobile">
                                <Link href="exams.html" className="nav_main_heading">Exams</Link>
                            </div>
                            <div className="navigation_div visible_in_mobile">
                                <Link href="boards.html" className="nav_main_heading">Boards</Link>
                            </div>
                            <div className="navigation_div visible_in_mobile">
                                <Link href="scholarships.html" className="nav_main_heading">Scholarships</Link>
                            </div>
                            <div className="navigation_div visible_in_mobile">
                                <Link href="admissions.html" className="nav_main_heading">Admissions</Link>
                            </div>
                            <div className="navigation_div visible_in_mobile">
                                <Link href="counselling.html" className="nav_main_heading">Counselling</Link>
                            </div>
                            <div className="navigation_div visible_in_mobile">
                                <Link href="news.html" className="nav_main_heading">News</Link>
                            </div>
                            <div className="navigation_div visible_in_mobile">
                                <Link href="articles.html" className="nav_main_heading">Articles</Link>
                            </div>
                        </div>
                    </div>

                    <div className="search_and_user_wrapper">
                        <div className="header_searchbar_wrapper">
                            <div className="searchbar_icon"></div>
                        </div>
                        <div className="user_login_wrapper">


                            <div className="user_icon">
                                <p className="guest_icon"></p>
                            </div>


                            <div className="login_and_register_snippet ">

                                <div className="sidenav_closer">
                                    <Link href="/" ></Link>
                                    <span className="close_sidenav"></span>
                                </div>

                                <p>Join CollegeSearch Family</p>
                                <span>Register & enjoy the perks of a Universal College
                                    Application, Easy Process, Time-saving, and Free Contact details and Brochures.</span>

                                <div className="facilities_wrapper">
                                    <div className="facilities_div">
                                        <div className="facilities_icon"></div>
                                        <p className="facilities_text"><b>20 Lakhs+</b><br />Monthly Users</p>
                                    </div>
                                    <div className="facilities_div">
                                        <div className="facilities_icon"></div>
                                        <p className="facilities_text"><b>20 Lakhs+</b><br />Monthly Users</p>
                                    </div>
                                    <div className="facilities_div">
                                        <div className="facilities_icon"></div>
                                        <p className="facilities_text"><b>20 Lakhs+</b><br />Monthly Users</p>
                                    </div>
                                </div>

                                <Link href="student-login.html" className="studenLogin">Login / Signup For Better Experience</Link>
                            </div>
                        </div>

                        <div id="searchbar_snippet">
                            <div className="search_mega_menu" id="search_desktop">
                                {/* <form action="https://www.collegesearch.in/search" method="post" id="form_search_grid">
                                <input type="hidden" name="_token" value="574rMNrlHMF5dz45w9oNHkqw5r2lbAY5nOuntxPP"
                                    autocomplete="off">
                                <div className="input_group_icon">
                                    <input name="keyword" type="text" className="searchtext" onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter College or University Name...'"
                                        placeholder="Enter College or University Name..." id="searchtext"
                                        autocomplete="off">
                                    <span id="closeSearchBar"></span>
                                </div>
                            </form> */}
                            </div>

                            <div className="search_v2_mid_wrap">
                                <ul id="universalHeaderSearch">

                                </ul>
                                <div className="popular_wrap_left">
                                    <p className="purple_heading">Popular Colleges by Branches</p>
                                    <div className="popular_course_wrap">
                                        <Link href="mba-colleges-india.html" >MBA/PGDM</Link>
                                        <Link href="mca-colleges-india.html" >MCA</Link>
                                        <Link href="engineering-colleges-india.html" >B.Tech/B.E</Link>
                                        <Link href="bsc-colleges-india.html" >B.Sc</Link>
                                        <Link href="bca-colleges-india.html" >BCA</Link>
                                        <Link href="bba-colleges-india.html" >BBA</Link>
                                        <Link href="commerce-colleges-india.html" >B.COM</Link>
                                    </div>

                                    <div className="trending_wrap">
                                        <p className="purple_heading">Trending Search</p>
                                        <div className="trending_wrap_item">
                                            <Link href="mba/colleges-delhi-ncr.html" >Top MBA Colleges in Delhi/NCR</Link>
                                            <div className="arrow_up"></div>
                                        </div>
                                        <div className="trending_wrap_item">
                                            <Link href="mba/colleges-bangalore.html" >Top MBA Colleges in Bangalore</Link>
                                            <div className="arrow_up"></div>
                                        </div>
                                        <div className="trending_wrap_item">
                                            <Link href="engineering/colleges-delhi-ncr.html" >Top engineering Colleges in
                                                Delhi/NCR</Link>                                            <div className="arrow_up"></div>
                                        </div>
                                        <div className="trending_wrap_item">
                                            <Link href="engineering/colleges-bangalore.html" >Top engineering Colleges in
                                                Bangalore</Link>                                            <div className="arrow_up"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search_trending_wrap_main_inner" id="search-results">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
