import React from 'react'
//bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import ContactDisplay from './ContactDisplay';

const Contact = () => {
    return (
        <div className='mb-4'>
            <Navbar />
            <br />
            <ContactDisplay />
        </div>
    );
}

export default Contact;
