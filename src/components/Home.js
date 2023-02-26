import React from 'react';
import classes from './Home.module.css'
import MyNavbar from './Navbar'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
            <MyNavbar />
            <Container style={{ width: 'auto' }}>
                <main className={classes.mainpage}>
                    <h1 className={classes.title}>Charles Cantin</h1>
                    <p>Photographe</p>
                </main >
            </Container>

        </div>

    )
}

export default Home