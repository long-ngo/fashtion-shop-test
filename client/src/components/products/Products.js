import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import './Products.css';

const Products = ({ handleTransparent }) => {
    const [products, setProduct] = useState([]);

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
                }/api/products`
            )
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
        return () => setProduct([]);
    }, []);

    return (
        <main id="main">
            <Breadcrumbs />
            <section className="inner-page">
                <div className="container">
                    <div className="latest-products">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>Latest Products</h2>
                                        <a href="products.html">
                                            view all products{' '}
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </div>

                                {products.map((product) => {
                                    return (
                                        <div
                                            className="col-md-4"
                                            key={product._id}
                                        >
                                            <div className="product-item">
                                                <a href="#">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                    />
                                                </a>
                                                <div className="down-content">
                                                    <Link
                                                        to={`/products/${product._id}`}
                                                    >
                                                        <h3>{product.name}</h3>
                                                    </Link>
                                                    <h6>${product.price}</h6>
                                                    <p>{product.description}</p>
                                                    <ul className="stars">
                                                        <li>
                                                            <i className="fa fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span>Reviews (24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;
