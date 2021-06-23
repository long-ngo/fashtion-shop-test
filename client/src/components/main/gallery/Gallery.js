import './Gallery.css';
import GLightbox from 'glightbox';

const Gallery = () => {
    // const galleryLightbox = GLightbox({
    //     selector: '.gallery-lightbox'
    // });

    return (
        <section id="gallery" className="gallery">
            <div className="container-fluid">
                <div className="section-title">
                    <h2>
                        Some photos from <span>Our Restaurant</span>
                    </h2>
                    <p>
                        Ut possimus qui ut temporibus culpa velit eveniet modi
                        omnis est adipisci expedita at voluptas atque vitae
                        autem.
                    </p>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-1.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-1.jpg"
                                    alt="gallery-1"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-2.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-2.jpg"
                                    alt="gallery-2"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-3.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-3.jpg"
                                    alt="gallery-3"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-4.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-4.jpg"
                                    alt="gallery-4"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-5.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-5.jpg"
                                    alt="gallery-5"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-6.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-6.jpg"
                                    alt="gallery-6"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-7.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-7.jpg"
                                    alt="gallery-7"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a
                                href="assets/img/gallery/gallery-8.jpg"
                                className="gallery-lightbox"
                            >
                                <img
                                    src="assets/img/gallery/gallery-8.jpg"
                                    alt="gallery-8"
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
