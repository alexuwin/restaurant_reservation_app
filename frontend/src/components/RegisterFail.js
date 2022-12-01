import { useState } from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
//testBranch
function RegisterFail() {

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
        <section data-testid="register-2">
            <div>
                <h1 className="loginRegisterTitle">Register</h1>
                <h6 className="loginRegisterError">The username is taken.</h6>
                <form action="/register" method="POST">
                    <div className='loginRegisterCentered'>
                        <span>
                            <div>
                                <input id="name" name="name" placeholder="Name (Optional)" type="text" className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p></p>
                            <div>
                                <input id="email" name="email" placeholder="Email (Optional)" type="text" className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p></p>
                            <div>
                                <input id="username" name="username" placeholder="Username" type="text" required className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p></p>
                            <div>
                                <input id="password" name="password" placeholder="Password" type={password} required className="inp-text-input-loginReg" autocomplete="off"></input>
                                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                            </div>
                            <p></p>
                            <input type="submit" value="Create Account" className="inp-text-input-loginReg"/>
                            <div class="register">
                                Already have an account?
                                <Link to='/login'><button id="login-link" className="btn-work">Login</button></Link>
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterFail;