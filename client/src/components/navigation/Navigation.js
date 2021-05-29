import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            
        </div>
    );
}

export default Navigation;