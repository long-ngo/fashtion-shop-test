import Topbar from "./Topbar";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);
            if (selectEl) {
                if (all) {
                    selectEl.forEach((e) => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        /**
         * Easy on scroll event listener
         */
        const onscroll = (el, listener) => {
            el.addEventListener("scroll", listener);
        };

        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select("#navbar .scrollto", true);
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach((navbarlink) => {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (
                    position >= section.offsetTop &&
                    position <= section.offsetTop + section.offsetHeight
                ) {
                    navbarlink.classList.add("active");
                } else {
                    navbarlink.classList.remove("active");
                }
            });
        };
        window.addEventListener("load", navbarlinksActive);
        onscroll(document, navbarlinksActive);

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            let header = select("#header");
            let offset = header.offsetHeight;

            let elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: "smooth",
            });
        };

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select("#header");
        let selectTopbar = select("#topbar");
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add("header-scrolled");
                    if (selectTopbar) {
                        selectTopbar.classList.add("topbar-scrolled");
                    }
                } else {
                    selectHeader.classList.remove("header-scrolled");
                    if (selectTopbar) {
                        selectTopbar.classList.remove("topbar-scrolled");
                    }
                }
            };
            window.addEventListener("load", headerScrolled);
            onscroll(document, headerScrolled);
        }

        /**
         * Back to top button
         */
        let backtotop = select(".back-to-top");
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add("active");
                } else {
                    backtotop.classList.remove("active");
                }
            };
            window.addEventListener("load", toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }

        /**
         * Mobile nav toggle
         */
        on("click", ".mobile-nav-toggle", function (e) {
            select("#navbar").classList.toggle("navbar-mobile");
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
        });

        /**
         * Mobile nav dropdowns activate
         */
        on(
            "click",
            ".navbar .dropdown > a",
            function (e) {
                if (select("#navbar").classList.contains("navbar-mobile")) {
                    e.preventDefault();
                    this.nextElementSibling.classList.toggle("dropdown-active");
                }
            },
            true
        );

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on(
            "click",
            ".scrollto",
            function (e) {
                if (select(this.hash)) {
                    e.preventDefault();

                    let navbar = select("#navbar");
                    if (navbar.classList.contains("navbar-mobile")) {
                        navbar.classList.remove("navbar-mobile");
                        let navbarToggle = select(".mobile-nav-toggle");
                        navbarToggle.classList.toggle("bi-list");
                        navbarToggle.classList.toggle("bi-x");
                    }
                    scrollto(this.hash);
                }
            },
            true
        );

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener("load", () => {
            if (window.location.hash) {
                if (select(window.location.hash)) {
                    scrollto(window.location.hash);
                }
            }
        });
    });
    return (
        <>
            <Topbar />
            <header
                id="header"
                className="fixed-top d-flex align-items-center header-transparent"
            >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="logo me-auto">
                        <h1>
                            <a href="index.html">Delicious</a>
                        </h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <a
                                    className="nav-link scrollto active"
                                    href="#hero"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#menu">
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#specials"
                                >
                                    Specials
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#events">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#chefs">
                                    Chefs
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#gallery"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#">
                                    <span>Drop Down</span>
                                    <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Drop Down 1</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Deep Drop Down</span>
                                            <i className="bi bi-chevron-right" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Deep Drop Down 1</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 3</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 4</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                    <a
                        href="#book-a-table"
                        className="book-a-table-btn scrollto"
                    >
                        Book a table
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
