//import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <Link to="/users">User</Link>
    )
}

export default Header;