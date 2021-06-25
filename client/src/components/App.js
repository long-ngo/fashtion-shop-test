import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Admin from '../admin/Admin';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Hero />
                        <Main />
                    </Route>

                    <Route path="/products/:id">
                        <ProductDetails />
                    </Route>

                    <Route path="/products">
                        <Products />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="/admin">
                        <Admin />
                    </Route>

                    <Route path="/:somestring">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </Router>
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
