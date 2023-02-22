import React from 'react';
import classes from './Home.module.css'
import Navbar from './Navbar'

function Home() {
    return (
        <main className={classes.mainpage}>
            <Navbar />
            <h1>Charles Cantin</h1>
            <p>Photographe</p>
        </main >
    )
}

export default Home