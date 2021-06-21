import './Footer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
    const hide = useSelector((state) => state.footer.hide);

    return (
        <footer id="footer" style={{ display: hide ? 'none' : 'block' }}>
            <div className="container">
                <h3>
                    <Link to="/">Fashtion Shop</Link>
                </h3>
                <p>
                    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis
                    magni eligendi fuga maxime saepe commodi placeat.
                </p>
                <div className="social-links">
                    <a href="#" className="twitter">
                        <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                        <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                        <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                        <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                        <i className="bx bxl-linkedin" />
                    </a>
                </div>
                <div className="copyright">
                    © Copyright{' '}
                    <strong>
                        <span>Fashtion Shop</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className="credits">
                    Designed by
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
