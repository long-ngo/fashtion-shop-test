import { Route, BrowserRouter, Switch } from 'react-router-dom';
import User from './User';
import Home from './Home';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/user" component={User} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
