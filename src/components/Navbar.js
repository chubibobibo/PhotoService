import React from 'react';
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbarLinks}>
                <Link to="/">HOME</Link>
                <a href="/gallery">GALLERY</a>
                <Link to="/rates">RATES</Link>
                <a href="/contact">CONTACT</a>
            </div>
        </div >
    );
}

export default Navbar;