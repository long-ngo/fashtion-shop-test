import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import Error from './components/Error';

const App = () => {
    return (
        <Router>
            <Header />

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
