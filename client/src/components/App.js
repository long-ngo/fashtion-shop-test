import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Header from './header/Header';
import Hero from './hero/Hero';
import Main from './main/Main';
import Footer from './footer/Footer';

import Products from './products/Products';
import ProductDetails from './product-details/ProductDetails';
import About from './main/about/About';
import Error from './Error';
import Cart from './cart/Cart';

const App = () => {
    const [transparent, setTransparent] = useState(true);
    const handleTransparent = (trans) => {
        setTransparent(trans);
    };

    return (
        <>
            <Router>
                <Header transparent={transparent} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => {
                            return (
                                <>
                                    <Hero
                                        handleTransparent={handleTransparent}
                                    />
                                    <Main />
                                </>
                            );
                        }}
                    />
                    <Route
                        path="/products"
                        component={() => {
                            return (
                                <Products
                                    handleTransparent={handleTransparent}
                                />
                            );
                        }}
                    />
                    <Route
                        path="/product-details"
                        component={() => {
                            return (
                                <ProductDetails
                                    handleTransparent={handleTransparent}
                                />
                            );
                        }}
                    />
                    <Route
                        path="/about"
                        component={() => {
                            return <About />;
                        }}
                    />
                    <Route
                        path="/cart"
                        component={() => {
                            return (
                                <Cart handleTransparent={handleTransparent} />
                            );
                        }}
                    />
                    <Route path="/:somestring" component={Error} />
                </Switch>
            </Router>
            <Footer />
            <a
                href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
        </>
    );
};

export default App;
