import React, { useContext } from 'react';
import { Form, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../image/brand_logo.png';
import './Header.css';
import { logOutHandler } from '../Login/LoginManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // user logOutHandler
    const userLogOutHandler = () => {
        logOutHandler().then(res => {
            localStorage.removeItem('user');
            setLoggedInUser(res);
        });
    };
    const userDetails = localStorage.getItem('user');
    // dynamic header color
    const location = useLocation();
    const { locationName } = useParams();
    let navBarColor;
    let logoColor;
    if (location.pathname === '/home' || location.pathname === `/booking/${locationName}` || location.pathname === '/') {
        navBarColor = 'dark';
        logoColor = {
            filter: 'invert(100%)',
        };
    } else {
        navBarColor = 'light';
        logoColor = {};
    }
    //    light=black , dark=white filter: invert(100%);

    return (
        <div className="header-container">
            <Navbar bg="transparent" variant={navBarColor}>
                <Navbar.Brand href="">
                    <Link to="/home">
                        <img style={logoColor} className="logo-img" src={logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline></Form>
                </Nav>
                <Nav>
                    <Link className="nav-link" to="/home">
                        Home
                    </Link>
                    <Link className="nav-link" to="/nearestHospital">
                        Map
                    </Link>
                    <Link className="nav-link" to="/helpline">
                        helpline
                    </Link>
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    {loggedInUser.name && (
                        <Link className="nav-link" to="/">
                            {loggedInUser.name || userDetails.name}
                        </Link>
                    )}
                    {loggedInUser.name ? (
                        <Link className="nav-link" to="/login">
                            <Button onClick={userLogOutHandler} variant="success">
                                Logout
                            </Button>
                        </Link>
                    ) : (
                        <Link className="nav-link" to="/login">
                            <Button variant="success">Login</Button>
                        </Link>
                    )}
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
