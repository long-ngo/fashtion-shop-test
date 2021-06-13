import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetails.css';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ handleTransparent }) => {
    const [products, setProducts] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        handleTransparent(false);
    }, []);

    useEffect(() => {
        axios
            .get(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/products/${id}`
            )
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
        return () => setProducts([]);
    }, []);

    return (
        <main id="main">
            <Breadcrumbs />
            <section className="inner-page">
                <div className="container">
                    {products.map((product) => {
                        return (
                            <main className="product-details_container">
                                {/* Left Column / Headphones Image */}
                                <div className="left-column">
                                    <img
                                        data-image="black"
                                        src={product.image}
                                        alt={product.productName}
                                    />
                                    <img
                                        data-image="blue"
                                        src={product.image}
                                        alt={product.productName}
                                    />
                                    <img
                                        data-image="red"
                                        className="active"
                                        src={product.image}
                                        alt={product.productName}
                                    />
                                </div>
                                {/* Right Column */}
                                <div className="right-column">
                                    {/* Product Description */}
                                    <div className="product-description">
                                        <span>abc</span>
                                        <h1>{product.productName}</h1>
                                        <p>
                                            The preferred choice of a vast range
                                            of acclaimed DJs. Punchy,
                                            bass-focused sound and high
                                            isolation. Sturdy headband and
                                            on-ear cushions suitable for live
                                            performance
                                        </p>
                                    </div>
                                    {/* Product Configuration */}
                                    <div className="product-configuration">
                                        {/* Product Color */}
                                        <div className="product-color">
                                            <span>Color</span>
                                            <div className="color-choose">
                                                <div>
                                                    <input
                                                        data-image="red"
                                                        type="radio"
                                                        id="red"
                                                        name="color"
                                                        defaultValue="red"
                                                        defaultChecked
                                                    />
                                                    <label htmlFor="red">
                                                        <span />
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        data-image="blue"
                                                        type="radio"
                                                        id="blue"
                                                        name="color"
                                                        defaultValue="blue"
                                                    />
                                                    <label htmlFor="blue">
                                                        <span />
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        data-image="black"
                                                        type="radio"
                                                        id="black"
                                                        name="color"
                                                        defaultValue="black"
                                                    />
                                                    <label htmlFor="black">
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Cable Configuration */}
                                        <div className="cable-config">
                                            <span>Cable configuration</span>
                                            <div className="cable-choose">
                                                <button>Straight</button>
                                                <button>Coiled</button>
                                                <button>Long-coiled</button>
                                            </div>
                                            <a href="#">
                                                How to configurate your
                                                headphones
                                            </a>
                                        </div>
                                    </div>
                                    {/* Product Pricing */}
                                    <div className="product-price">
                                        <span>{product.unitPrice}$</span>
                                        <a href="#" className="cart-btn">
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </main>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
