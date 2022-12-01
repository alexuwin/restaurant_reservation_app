//import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
//testBranch

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

function LoginFail(){

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
        <section data-testid="login-2">
            <div>
                <h1 className="loginRegisterTitle">Login</h1>
                <h6 className="loginRegisterError">Incorrect Username or Password.</h6>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
                    <link rel="stylesheet" href="App.css"></link>
                <form action="/login" method="POST">
                    <div className='loginRegisterCentered'>
                        <span>
                            <div>
                                <input id="username" name="username" placeholder="Username" type="text" required className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p>
                            </p>
                            <div>
                                <input id="password" name="password" placeholder="Password" type={password} required className="inp-text-input-loginReg" autocomplete="off"></input>
                                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                            </div>
                            <p>
                            </p>
                            <input type="submit" value="Login" className="inp-text-input-loginReg"/>
                            <div class="register">
                                Don't have an account yet?
                                <Link to='/register'><button id="register-link" className="btn-work-reg">Register</button></Link>
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default LoginFail;