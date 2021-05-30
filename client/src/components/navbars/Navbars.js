import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbars.css';

const Navbars = () => {
    return (
        <div className="Navbars">
            <Navbar bg="light" variant="light">
                <Navbar.Brand as={Link} to="/">Shop</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/products">
                        Products
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navbars;
