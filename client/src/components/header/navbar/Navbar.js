import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li>
                    <a className="nav-link scrollto active" href="#hero">
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
                    <a className="nav-link scrollto" href="#specials">
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
                    <a className="nav-link scrollto" href="#gallery">
                        Xưởng
                    </a>
                </li>
                <li>
                    <a className="nav-link scrollto" href="#contact">
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
    );
};

export default Navbar;
