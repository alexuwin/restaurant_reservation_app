//import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'


/*
const visibilityBtn = document.getElementById("visibilityBtn")
visibilityBtn.addEventListener("click", toggleVisibility)

function toggleVisibility() {

    const passwordInput = document.getElementById("password")
    const icon = document.getElementById("icon")

    if(passwordInput.type === "password"){
        passwordInput.type = "text"
        icon.innerText = "visibility_off"
    } else {
        passwordInput.type = "password"
        icon.innerText = "visibility"
    }
}
*/

function Login(){

    const [password, setPass]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
  
    const handleToggle = () => {    
      if(password==='password'){
        setIcon(eye);      
        setPass('text');
      }
      else{
        setIcon(eyeOff);     
        setPass('password');
      }
    }
  
    return(
        <section>
            <div>
                <h1>Login</h1>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
                    <link rel="stylesheet" href="App.css"></link>
                <form action="/login" method="POST">
                    <div className='loginRegisterCentered'>
                        <span>
                            <div>
                                <input id="username" name="username" placeholder="Username" type="text" required class="validate" autocomplete="off"></input>
                            </div>
                            <div>
                                <input id="password" name="password" placeholder="Password" type={password} required class="validate" autocomplete="off"></input>
                                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                            </div>
                            <input type="submit" value="Login"/>
                            <div class="register">
                                Don't have an account yet?
                                <Link to='/register'><button id="register-link">Register</button></Link>
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;