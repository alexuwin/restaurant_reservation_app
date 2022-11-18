import React from 'react';
import {Link} from 'react-router-dom';

function Register() {
    return(
        <section>
            <div>
                <h1>Register</h1>
                <form action="/register" method="POST">
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
                        <input id="password" name="password" placeholder="Password" type="text" required class="validate" autocomplete="off"></input>
                    </div>
                    <input type="submit" value="Create Account" />
                </form>
                <div class="register">
                    Already have an account?
                    <Link to='/login'><button id="login-link">Login</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Register;