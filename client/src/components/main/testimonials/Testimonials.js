import "./Testimonials.css";
import Swiper from "swiper";
import { useEffect } from "react";

const Testimonials = () => {
    useEffect(() => {
        new Swiper(".testimonials-slider", {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        });
    });

    return (
        <section id="testimonials" className="testimonials">
            <div className="container position-relative">
                <div
                    className="testimonials-slider swiper-container"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img
                                    src="assets/img/testimonials/testimonials-1.jpg"
                                    className="testimonial-img"
                                    alt="testimonials-1"
                                />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <div className="sstars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </div>
                                <p>
                                    <i
                                        className="
                                        bx
                                        bxs-quote-alt-left
                                        quote-icon-left
                                        "
                                    />
                                    Proin iaculis purus consequat sem cure digni
                                    ssim donec porttitora entum suscipit
                                    rhoncus. Accusantium quam, ultricies eget
                                    id, aliquam eget nibh et. Maecen aliquam,
                                    risus at semper.
                                    <i
                                        className="
                                            bx
                                            bxs-quote-alt-right
                                            quote-icon-right
                                            "
                                    />
                                </p>
                            </div>
                        </div>
                        {/* End testimonial item */}
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img
                                    src="assets/img/testimonials/testimonials-2.jpg"
                                    className="testimonial-img"
                                    alt="testimonials-2"
                                />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </div>
                                <p>
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-left
                                  quote-icon-left
                              "
                                    />
                                    Export tempor illum tamen malis malis eram
                                    quae irure esse labore quem cillum quid
                                    cillum eram malis quorum velit fore eram
                                    velit sunt aliqua noster fugiat irure amet
                                    legam anim culpa.
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-right
                                  quote-icon-right
                              "
                                    />
                                </p>
                            </div>
                        </div>
                        {/* End testimonial item */}
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img
                                    src="assets/img/testimonials/testimonials-3.jpg"
                                    className="testimonial-img"
                                    altalt="testimonials-3"
                                />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </div>
                                <p>
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-left
                                  quote-icon-left
                              "
                                    />
                                    Enim nisi quem export duis labore cillum
                                    quae magna enim sint quorum nulla quem
                                    veniam duis minim tempor labore quem eram
                                    duis noster aute amet eram fore quis sint
                                    minim.
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-right
                                  quote-icon-right
                              "
                                    />
                                </p>
                            </div>
                        </div>
                        {/* End testimonial item */}
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img
                                    src="assets/img/testimonials/testimonials-4.jpg"
                                    className="testimonial-img"
                                    alt="testimonials-4"
                                />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </div>
                                <p>
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-left
                                  quote-icon-left
                              "
                                    />
                                    Fugiat enim eram quae cillum dolore dolor
                                    amet nulla culpa multos export minim fugiat
                                    minim velit minim dolor enim duis veniam
                                    ipsum anim magna sunt elit fore quem dolore
                                    labore illum veniam.
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-right
                                  quote-icon-right
                              "
                                    />
                                </p>
                            </div>
                        </div>
                        {/* End testimonial item */}
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img
                                    src="assets/img/testimonials/testimonials-5.jpg"
                                    className="testimonial-img"
                                    alt="testimonials-5"
                                />
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </div>
                                <p>
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-left
                                  quote-icon-left
                              "
                                    />
                                    Quis quorum aliqua sint quem legam fore sunt
                                    eram irure aliqua veniam tempor noster
                                    veniam enim culpa labore duis sunt culpa
                                    nulla illum cillum fugiat legam esse veniam
                                    culpa fore nisi cillum quid.
                                    <i
                                        className="
                                  bx
                                  bxs-quote-alt-right
                                  quote-icon-right
                              "
                                    />
                                </p>
                            </div>
                        </div>
                        {/* End testimonial item */}
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
