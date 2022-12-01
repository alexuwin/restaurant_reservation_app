import React from 'react';
import {Link} from 'react-router-dom';
//import {useState} from 'react';

function Home(){
    return(
        <section> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
            <link rel="stylesheet" href="App.css"></link>
            <div className="welcomeScreen">
                <p></p>
                <br></br>
                Welcome.
                <p></p>
                <div className="homeMsg">We are ecstatic to give you the opportunity to embark on the exquisite cuisine of traditional Vietnamese dishes.</div>
                <div className="quote">“Food is our common ground, a universal experience.” –James Beard</div>
            </div>
            <Link to='/login'><button id="register-link" className="start-reservation">Make a reservation!</button></Link>
        </section>
    );
}

export default Home;