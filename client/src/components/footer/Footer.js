import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <h3>Fashtion Shop</h3>
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
