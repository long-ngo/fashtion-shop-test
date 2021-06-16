import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import './ProductDetails.css';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { addCart } from '../../actions/cart';

const ProductDetails = ({ handleTransparent }) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

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

    const addToCart = (product) => {
        product.count = 1;
        dispatch(addCart(product));
    };

    return (
        <main id="main">
            <Breadcrumbs />
            <section className="inner-page">
                <div className="container">
                    <div className="row">
                        {products.map((product, index) => {
                            return (
                                <>
                                    {/* Left Column / Headphones Image */}
                                    <div className="left-column" key={index}>
                                        {/* <img
                                        data-image="black"
                                        src={product.image}
                                        alt={product.productName}
                                    />
                                    <img
                                        data-image="blue"
                                        src={product.image}
                                        alt={product.productName}
                                    /> */}
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
                                            <span>Thời trang nữ</span>
                                            <h1>{product.name}</h1>
                                            <p>{product.description}</p>
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
                                            <span>{product.price}$</span>
                                            {/* <a href="#" className="cart-btn">
                                                Thêm vào giỏ
                                            </a> */}
                                            <button
                                                className="cart-btn"
                                                onClick={() =>
                                                    addToCart(product)
                                                }
                                            >
                                                Thêm vào giỏ
                                            </button>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
