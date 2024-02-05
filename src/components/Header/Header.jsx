import React, { Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/style.css";
import "../../assets/css/media.css";

const Header = () => {
    return (
        <Fragment>
           <Navbar expand="sm">
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><strong>Digital Quran</strong></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link><NavLink to="/">Homepage</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header
