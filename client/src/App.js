//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
//import Topbar from './components/Topbar';

// import Products from './components/Products';
// import About from './components/About';
// import Error from './components/Error';

const App = () => {
    return (
        <div>
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
