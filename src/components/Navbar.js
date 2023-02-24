import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='fixed-top'>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/gallery'>
                            <Nav.Link>Gallery</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/rates'>
                            <Nav.Link>Rates</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        // <nav className={classes.navbar}>
        //     <div className={classes.navbarLinks}>
        //         <Link to="/">HOME</Link>
        //         <Link to="/gallery">GALLERY</Link>
        //         <Link to="/rates">RATES</Link>
        //         <a href="/contact">CONTACT</a>
        //     </div>
        // </nav >
    );
}

export default MyNavbar;