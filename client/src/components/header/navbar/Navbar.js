import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li>
                    {/* <a className="nav-link scrollto active" href="/">
                        Trang chính
                    </a> */}
                    <Link to="/" className="active">
                        Trang chính
                    </Link>
                </li>
                <li className="dropdown">
                    {/* <a href="#menu">
                        <span>Sản phẩm</span>
                        <i className="bi bi-chevron-down" />
                    </a> */}
                    <Link to="/products">
                        <span>Sản phẩm</span>
                        <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/products">Thời trang nam</Link>
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
                <li>
                    <Link to="/admin" className="nav-link">
                        admin
                    </Link>
                </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
        </nav>
    );
};

export default Navbar;
