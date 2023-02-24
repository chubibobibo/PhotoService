import React from 'react';
import classes from './Home.module.css'
import MyNavbar from './Navbar'

function Home() {
    return (
        <div>
            <MyNavbar />
            <main className={classes.mainpage}>
                <h1 className={classes.title}>Charles Cantin</h1>
                <p>Photographe</p>
            </main >
        </div>

    )
}

export default Home