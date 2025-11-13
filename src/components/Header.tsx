'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { contactDetails, navigationLinks, socialLinks, headerData, navigationData2, navigationData } from "@/json/Header";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mbbsCities, setMbbsCities] = useState<string[]>([]);
  const [mbbsCountries, setMbbsCountries] = useState<string[]>([]);

  const [mbaStates, setMbaStates] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const combinedNavigation = [...(navigationData2 || []), ...(navigationData || [])];

  // Lightweight MBBS detector for header (kept minimal for perf)
  const isMbbsCollege = (data: any) => {
    const text = JSON.stringify(data || {}).toLowerCase();
    if (text.includes('mbbs') || text.includes('bachelor of medicine')) return true;
    const name = String(data?.name || data?.collegeName || '').toLowerCase();
    return name.includes('medical');
  };

  const gatherStrings = (val: any, depth = 0): string[] => {
    if (!val || depth > 2) return [];
    if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
      return [String(val)];
    }
    if (Array.isArray(val)) {
      return val.flatMap((v) => gatherStrings(v, depth + 1));
    }
    if (typeof val === 'object') {
      return Object.values(val).flatMap((v) => gatherStrings(v, depth + 1));
    }
    return [];
  };

  const isMbaCourse = (data: any) => {
    const categoryText = gatherStrings([data.category, data.categories, data.tags, data.courseName, data.name])
      .join(' ')
      .toLowerCase();
    const levelText = gatherStrings([data.courseLevel, data.level])
      .join(' ')
      .toLowerCase();
    const hasMbaCategory = categoryText.includes('mba');
    const isPgLevel = levelText.includes('pg') || levelText.includes('postgraduate') || levelText.includes('post graduate');
    return hasMbaCategory && isPgLevel;
  };

  const extractField = (obj: any, keys: string[]): any => {
    if (!obj) return undefined;
    for (const key of keys) {
      if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') return obj[key];
    }
    if (obj.location) {
      for (const key of keys) {
        if (obj.location[key] !== undefined && obj.location[key] !== null && obj.location[key] !== '') return obj.location[key];
      }
    }
    if (obj.address) {
      for (const key of keys) {
        if (obj.address[key] !== undefined && obj.address[key] !== null && obj.address[key] !== '') return obj.address[key];
      }
    }
    return undefined;
  };

  const collectEntries = (data: any): any[] => {
    const sources = [
      data.topColleges,
      data.relatedColleges,
      data.colleges,
      data.collegeList,
      data.popularColleges,
      data.featuredColleges,
      data.campuses,
      data.locations,
      data.centers,
      data.centres,
    ];
    const entries: any[] = [];
    sources.forEach((arr) => {
      if (Array.isArray(arr)) {
        arr.forEach((item) => {
          if (item && typeof item === 'object') entries.push(item);
        });
      }
    });
    if (entries.length === 0) entries.push(data);
    return entries;
  };

  const normalize = (v?: string) =>
    (v || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[.,]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  useEffect(() => {
    const q = query(collection(db, 'colleges'));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const cities = new Set<string>();
        const countries = new Set<string>();
        const states = new Set<string>();
        snap.forEach((doc) => {
          const d = doc.data();
          if (isMbbsCollege(d)) {
            const city = d.city || d.cityName || d?.location?.city || d?.address?.city;
            const country = d.country || d.countryName || d?.location?.country || d?.address?.country;
            if (normalize(country) === 'india') {
              if (city) cities.add(String(city));
            } else if (country) {
              countries.add(String(country));
            }
          }
          if (isMbaCourse(d)) {
            const entries = collectEntries(d);
            entries.forEach((entry) => {
              const state = extractField(entry, ['state', 'stateName', 'province']) || extractField(d, ['state', 'stateName']);
              const country =
                extractField(entry, ['country', 'countryName']) ||
                extractField(d, ['country', 'countryName']) ||
                'India';
              if (!state) return;
              if (normalize(country) && normalize(country) !== 'india') return;
              states.add(String(state));
            });
          }
        });
        setMbbsCities(Array.from(cities).sort((a, b) => a.localeCompare(b)));
        setMbbsCountries(Array.from(countries).sort((a, b) => a.localeCompare(b)));
        setMbaStates(Array.from(states as Set<string>).sort((a, b) => a.localeCompare(b)));
      },
      () => {}
    );
    return () => unsub();
  }, []);

  useEffect(() => {
    const heroSearch = document.getElementById('mobileHomeSearch');
    heroSearch?.addEventListener('click', openSearch);

    return () => {
      heroSearch?.removeEventListener('click', openSearch);
    };
  }, [openSearch]);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
    document.body.classList.toggle('modal-open', isSearchOpen);

    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) {
      backdrop.style.display = isSearchOpen ? 'block' : 'none';
    }

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === backdrop) {
        closeSearch();
      }
    };

    if (isSearchOpen && backdrop) {
      backdrop.addEventListener('click', handleBackdropClick);
    }

    return () => {
      if (backdrop) {
        backdrop.removeEventListener('click', handleBackdropClick);
        backdrop.style.display = 'none';
      }
      document.body.classList.remove('modal-open');
    };
  }, [isSearchOpen, closeSearch]);

  useEffect(() => {
    if (!isSearchOpen) return;
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSearch();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isSearchOpen, closeSearch]);

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

            {combinedNavigation.map((nav: any, idx) => (
              <div key={idx} className="navigation_div">
                <p className="nav_main_heading">{nav.heading || "Explore Courses"}</p>

                <div className="navigation_content">
                  <div className="right_navigation">
                    <p className="hide_right_navigation">
                      <span className="hide_sidenav">&larr;</span> &nbsp;
                      {nav.heading || "Explore Courses"}
                    </p>

                    <div className="parent_wrapper">
                      {/* Special dynamic MBBS block */}
                      {nav.heading === 'MBBS' ? (
                        <>
                          {/* Render Popular Courses from static config if present */}
                          {Array.isArray(nav.sections) && (() => {
                            const popularSection = nav.sections.find(
                              (s: any) => String(s?.title || '').toLowerCase() === 'popular courses'
                            );
                            if (!popularSection) return null;
                            return (
                              <div className="type_of_navigation_wrap">
                                <p>{popularSection.title}</p>
                                {Array.isArray(popularSection.links) &&
                                  popularSection.links.map((link: any, linkIdx: any) => (
                                    <Link key={linkIdx} href={link.url}>
                                      {link.label}
                                    </Link>
                                  ))}
                              </div>
                            );
                          })()}
                          <div className="type_of_navigation_wrap">
                            <p>MBBS Colleges in India</p>
                            {(mbbsCities.length > 0 ? mbbsCities.slice(0, 6) : []).map((city) => (
                              <Link key={city} href={`/course/mbbs.html?scope=india&city=${encodeURIComponent(city)}`}>
                                {`MBBS Colleges in ${city}`}
                              </Link>
                            ))}
                            <Link href={`/course/mbbs.html?scope=india`} className="view_more_link">
                              View more &rsaquo;
                            </Link>
                          </div>
                          <div className="type_of_navigation_wrap">
                            <p>MBBS Colleges in Abroad</p>
                            {(mbbsCountries.length > 0 ? mbbsCountries.slice(0, 6) : []).map((country) => (
                              <Link key={country} href={`/course/mbbs.html?scope=abroad&country=${encodeURIComponent(country)}`}>
                                {`MBBS in ${country}`}
                              </Link>
                            ))}
                            <Link href={`/course/mbbs.html?scope=abroad`} className="view_more_link">
                              View more &rsaquo;
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          {nav.courses
                            ? nav.courses.map((course: any, courseIdx: any) => (
                                <div key={courseIdx} className="course_navigation_wrap">
                                  <h4 className="course_title">{course.name}</h4>
                                  {course.sections.map((section: any, secIdx: any) => {
                                    const title = String(section.title || '').toLowerCase();
                                    const isMbaStateSection =
                                      nav.heading === 'Management' && title.includes('state');
                                    if (isMbaStateSection) {
                                      return (
                                        <div key={secIdx} className="type_of_navigation_wrap">
                                          <p>{section.title}</p>
                                          {(mbaStates.length > 0 ? mbaStates.slice(0, 6) : []).map((state) => (
                                            <Link
                                              key={state}
                                              href={`/course/mba.html?scope=india&state=${encodeURIComponent(state)}`}
                                            >
                                              {`MBA Colleges in ${state}`}
                                            </Link>
                                          ))}
                                          <Link href={`/course/mba.html?scope=india`} className="view_more_link">
                                            View more ›
                                          </Link>
                                        </div>
                                      );
                                    }
                                    return (
                                      <div key={secIdx} className="type_of_navigation_wrap">
                                        <p>{section.title}</p>
                                        {section.links.map((link: any, linkIdx: any) => (
                                          <Link key={linkIdx} href={link.url}>{link.label}</Link>
                                        ))}
                                      </div>
                                    );
                                  })}
                                </div>
                              ))
                            : nav.sections.map((section: any, secIdx: any) => (
                                <div key={secIdx} className="type_of_navigation_wrap">
                                  <p>{section.title}</p>
                                  {section.links.map((link: any, linkIdx: any) => (
                                    <Link key={linkIdx} href={link.url}>{link.label}</Link>
                                  ))}
                                </div>
                              ))}
                        </>
                      )}
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
            <button type="button" className="searchbar_icon" onClick={openSearch} aria-label="Open search"></button>
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

          <div
            id="searchbar_snippet"
            style={{ display: isSearchOpen ? 'block' : 'none' }}
            aria-hidden={!isSearchOpen}
            role="dialog"
            aria-modal="true"
          >
            <div className="search_modal_header">
              <div className="search_modal_input_wrap">
                <span className="search_modal_icon" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search College and University"
                  className="search_modal_input"
                />
                <button
                  type="button"
                  className="search_modal_close"
                  onClick={closeSearch}
                  aria-label="Close search"
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
            </div>
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
