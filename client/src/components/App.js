import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './header/Header';
import Hero from './hero/Hero';
import Main from './main/Main';
import Footer from './footer/Footer';

import Products from './Products';
import About from './main/about/About';
import Error from './Error';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => {
                            return (
                                <>
                                    <Header transparent={true} />
                                    <Hero />
                                    <Main />
                                </>
                            );
                        }}
                    />
                    <Route
                        path="/products"
                        component={() => {
                            return (
                                <main id="main">
                                    <Header />
                                    <Breadcrumbs />
                                    <Products />
                                </main>
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
                        path="/:somestring"
                        component={() => {
                            return (
                                <main id="main">
                                    <Breadcrumbs />
                                    <Error />
                                </main>
                            );
                        }}
                    />
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
