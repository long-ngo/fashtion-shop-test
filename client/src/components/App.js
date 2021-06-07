//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Hero from './hero/Hero';
import Main from './main/Main';
import Footer from './footer/Footer';
import './App.css';
//import Topbar from './components/Topbar';

// import Products from './components/Products';
// import About from './components/About';
// import Error from './components/Error';

const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
