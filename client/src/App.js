//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect } from 'react';

// import Products from './components/Products';
// import About from './components/About';
// import Error from './components/Error';

const App = () => {
    useEffect(() => {
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
              return [...document.querySelectorAll(el)]
            } else {
              return document.querySelector(el)
            }
        }

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }
        

        let selectHeader = select('#header')
        let selectTopbar = select('#topbar')

        if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.add('topbar-scrolled')
                }
            } else {
            selectHeader.classList.remove('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.remove('topbar-scrolled')
                }
            }
        }
            window.addEventListener('load', headerScrolled)
            onscroll(document, headerScrolled)
        }
    }, []);

    return (
        <div>
            <Topbar />
            <Header />
            <Hero />
            <Main />
            <Footer />
            {/* <Router>
            
                 <Switch>
                    <Route exact path='/' component={  } />
                    <Route path='/products' component={ Products } />
                    <Route path='/about' component={ About } />
                    <Route path='/:somestring' component={ Error } />
                </Switch>
                
            </Router> */}

           <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        </div>
    );
};

export default App;
