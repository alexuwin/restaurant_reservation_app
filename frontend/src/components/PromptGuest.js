//import React from 'react';
import {Link} from 'react-router-dom';

function PromptGuest(){
    return(
        <section data-testid="prompt-guest">
            <div>
                <h1 className="loginRegisterTitle">Continue as Guest?</h1>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
                <link rel="stylesheet" href="App.css"></link>
                
                <div className='loginRegisterCentered'>
                    <div class="register">
                        <Link to='/fee'><button id="register-link" className="inp-text-input-loginReg">Continue to Payment</button></Link>
                        Already have an account?
                        <Link to='/login'><button id="register-link" className="btn-work-reg">Login</button></Link>
                        Don't have an account yet?
                        <Link to='/register'><button id="register-link" className="btn-work-reg">Register</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromptGuest;