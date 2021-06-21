import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transparentHeader, clearHeader } from '../../actions/header';
import './Hero.css';

const Hero = () => {
    const dispatch = useDispatch();

    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    useEffect(() => {
        dispatch(transparentHeader());
        return () => dispatch(clearHeader());
    }, []);

    useEffect(() => {
        /**
         * Hero carousel indicators
         */
        let heroCarouselIndicators = select('#hero-carousel-indicators');
        let heroCarouselItems = select('#heroCarousel .carousel-item', true);

        heroCarouselItems.forEach((item, index) => {
            index === 0
                ? (heroCarouselIndicators.innerHTML +=
                      "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
                      index +
                      "' class='active'></li>")
                : (heroCarouselIndicators.innerHTML +=
                      "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
                      index +
                      "'></li>");
        });
    }, []);

    return (
        <section id="hero">
            <div className="hero-container">
                <div
                    id="heroCarousel"
                    data-bs-interval={5000}
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <ol
                        className="carousel-indicators"
                        id="hero-carousel-indicators"
                    />
                    <div className="carousel-inner" role="listbox">
                        {/* Slide 1 */}
                        <div
                            className="carousel-item active"
                            style={{
                                background: 'url(assets/img/slide/slide-1.jpg)'
                            }}
                        >
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        <span>Fashtion shop</span> Store
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Fashtion shop
                                    </p>
                                    <div>
                                        <a
                                            href="#menu"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Our Menu
                                        </a>
                                        <a
                                            href="#book-a-table"
                                            className="btn-book animate__animated animate__fadeInUp scrollto"
                                        >
                                            Book a Table
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div
                            className="carousel-item"
                            style={{
                                background: 'url(assets/img/slide/slide-2.jpg)'
                            }}
                        >
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Lorem Ipsum Dolor
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Ut velit est quam dolor ad a aliquid qui
                                        aliquid. Sequi ea ut et est quaerat
                                        sequi nihil ut aliquam. Occaecati alias
                                        dolorem mollitia ut. Similique ea
                                        voluptatem. Esse doloremque accusamus
                                        repellendus deleniti vel. Minus et
                                        tempore modi architecto.
                                    </p>
                                    <div>
                                        <a
                                            href="#menu"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Our Menu
                                        </a>
                                        <a
                                            href="#book-a-table"
                                            className="btn-book animate__animated animate__fadeInUp scrollto"
                                        >
                                            Book a Table
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div
                            className="carousel-item"
                            style={{
                                background: 'url(assets/img/slide/slide-3.jpg)'
                            }}
                        >
                            <div className="carousel-background">
                                <img
                                    src="assets/img/slide/slide-3.jpg"
                                    alt="slide-3"
                                />
                            </div>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Sequi ea ut et est quaerat
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Ut velit est quam dolor ad a aliquid qui
                                        aliquid. Sequi ea ut et est quaerat
                                        sequi nihil ut aliquam. Occaecati alias
                                        dolorem mollitia ut. Similique ea
                                        voluptatem. Esse doloremque accusamus
                                        repellendus deleniti vel. Minus et
                                        tempore modi architecto.
                                    </p>
                                    <div>
                                        <a
                                            href="#menu"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Our Menu
                                        </a>
                                        <a
                                            href="#book-a-table"
                                            className="btn-book animate__animated animate__fadeInUp scrollto"
                                        >
                                            Book a Table
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bi bi-chevron-left"
                            aria-hidden="true"
                        />
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bi bi-chevron-right"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
