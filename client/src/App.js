import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbars from './components/navbars/Navbars';
import Home from './components/home/Home';
import Products from './components/product/Products';
import About from './components/about/About';
import Error from './components/error/Error';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Navbars />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/products' component={ Products } />
                <Route path='/about' component={ About } />
                <Route path='/:somestring' component={ Error } />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
