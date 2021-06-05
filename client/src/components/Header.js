import Topbar from "./Topbar";
import { useEffect } from "react";

const Header = () => {
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

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

    const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
    };

    useEffect(() => {
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
                            <a href="index.html">Fashtion Shop</a>
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
                                    Trang chính
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#menu">
                                    <span>Sản phẩm</span>
                                    <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Thời trang nam</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#menu">
                                            <span>Thời trang nữ</span>
                                            <i className="bi bi-chevron-right" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Đầm</a>
                                            </li>
                                            <li>
                                                <a href="#">Váy</a>
                                            </li>
                                            <li>
                                                <a href="#">Áo thun</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Còn lại</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <li>
                                <a className="nav-link scrollto" href="#menu">
                                    Sản phẩm
                                </a>
                            </li> */}
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#specials"
                                >
                                    Mẹo
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#events">
                                    Sự kiện
                                </a>
                            </li>
                            {/* <li>
                                <a className="nav-link scrollto" href="#chefs">
                                    Nhân viên
                                </a>
                            </li> */}
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#gallery"
                                >
                                    Xưởng
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#contact"
                                >
                                    Liên hệ
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    Về chúng tôi
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
                        Giỏ hàng
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
