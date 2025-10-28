'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { contactDetails, navigationLinks, socialLinks, headerData, navigationData2, navigationData } from "@/json/Header";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const combinedNavigation = [...(navigationData2 || []), ...(navigationData || [])];

  return (
    <header id="universalHeader" className="checking">
      {/* Top Bar */}
      <div className="headerBarWrapper">
        <div id="headerAddressBar">
          <div className="CS_contact_details">
            {contactDetails.map((item, idx) => (
              <Link key={idx} href={item.href}>{item.label}</Link>
            ))}
          </div>

          <div className="moduleNavigation">
            {navigationLinks.map((link, idx) => (
              <Link key={idx} href={link.href}>{link.label}</Link>
            ))}
          </div>

          <div className="socialNavigation">
            <div className="social_right">
              {socialLinks.map((social, idx) => (
                <Link key={idx} href={social.href} target="_blank" className={social.className}></Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div id="headernavigationBar">
        <div className="logo_and_navigation_wrap">
                   <div
            className="hamburger_menu_wrap"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`hamburger_menu ${isMenuOpen ? "active" : ""}`}></span>
          </div>


          <Link href="/">
            <Image
              src="/build/assets/logo.png"
              alt="Mythri Logo"
              width={180}
              height={32}
              className="logo-img"
              priority
            />
          </Link>

          <div className={`navigation_wrapper  ${isMenuOpen ? "open" : "visible_side_nav"}`}>
            <div className="sidenav_closer" onClick={() => setIsMenuOpen(false)}>
              <Link href="/"></Link>
              <span className="close_sidenav"></span>
            </div>

            {combinedNavigation.map((nav, idx) => (
              <div key={idx} className="navigation_div">
                <p className="nav_main_heading">{nav.heading || "Explore Courses"}</p>

                <div className="navigation_content">
                  <div className="right_navigation">
                    <p className="hide_right_navigation">
                      <span className="hide_sidenav">&larr;</span> &nbsp;
                      {nav.heading || "Explore Courses"}
                    </p>

                    <div className="parent_wrapper">
                      {/* Courses */}
                      {nav.courses
                        ? nav.courses.map((course, courseIdx) => (
                            <div key={courseIdx} className="course_navigation_wrap">
                              <h4 className="course_title">{course.name}</h4>

                              {course.sections.map((section, secIdx) => (
                                <div key={secIdx} className="type_of_navigation_wrap">
                                  <p>{section.title}</p>
                                  {section.links.map((link, linkIdx) => (
                                    <Link key={linkIdx} href={link.url}>{link.label}</Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          ))
                        : /* Sections only */
                          nav.sections.map((section, secIdx) => (
                            <div key={secIdx} className="type_of_navigation_wrap">
                              <p>{section.title}</p>
                              {section.links.map((link, linkIdx) => (
                                <Link key={linkIdx} href={link.url}>{link.label}</Link>
                              ))}
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & User */}
        <div className="search_and_user_wrapper">
          <div className="header_searchbar_wrapper">
            <div className="searchbar_icon"></div>
          </div>

          <div className="user_login_wrapper">
            <div className="user_icon">
              <p className="guest_icon"></p>
            </div>

            <div className="login_and_register_snippet">
              <div className="sidenav_closer">
                <Link href="/"></Link>
                <span className="close_sidenav"></span>
              </div>

              <p>{headerData.header.joinMessage.title}</p>
              <span>{headerData.header.joinMessage.subtitle}</span>

              <div className="facilities_wrapper">
                {headerData.header.facilities.map((f, idx) => (
                  <div key={idx} className="facilities_div">
                    <div className={f.iconClass}></div>
                    <p className="facilities_text">{f.text}</p>
                  </div>
                ))}
              </div>

              <Link href={headerData.header.joinMessage.loginLink} className="studenLogin">
                Login / Signup For Better Experience
              </Link>
            </div>
          </div>

          <div id="searchbar_snippet">
            <div className="search_mega_menu" id="search_desktop"></div>

            <div className="search_v2_mid_wrap">
              <ul id="universalHeaderSearch"></ul>

              <div className="popular_wrap_left">
                <p className="purple_heading">Popular Colleges by Branches</p>
                <div className="popular_course_wrap">
                  {headerData.header.search.popularBranches.map((branch, idx) => (
                    <Link key={idx} href={branch.url}>{branch.label}</Link>
                  ))}
                </div>

                <div className="trending_wrap">
                  <p className="purple_heading">Trending Search</p>
                  {headerData.header.search.trendingSearches.map((trend, idx) => (
                    <div key={idx} className="trending_wrap_item">
                      <Link href={trend.url}>{trend.label}</Link>
                      <div className="arrow_up"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="search_trending_wrap_main_inner" id="search-results"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
