import { useState } from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

function Register() {

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
                <h1>Register</h1>
                <form action="/register" method="POST">
                    <div className='loginRegisterCentered'>
                        <span>
                            <div>
                                <input id="name" name="name" placeholder="Name (Optional)" type="text" class="validate" autocomplete="off"></input>
                            </div>
                            <div>
                                <input id="email" name="email" placeholder="Email (Optional)" type="text" class="validate" autocomplete="off"></input>
                            </div>
                            <div>
                                <input id="username" name="username" placeholder="Username" type="text" required class="validate" autocomplete="off"></input>
                            </div>
                            <div>
                                <input id="password" name="password" placeholder="Password" type={password} required class="validate" autocomplete="off"></input>
                                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                            </div>
                            <input type="submit" value="Create Account"/>
                            <div class="register">
                                Already have an account?
                                <Link to='/login'><button id="login-link">Login</button></Link>
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;