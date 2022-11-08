import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return(
        <section>
            <div>
                <h1>Login</h1>
                <form action="/login" method="GET">
                    <div>
                        <input id="username" name="username" placeholder="Username" type="text" required class="validate" autocomplete="off"></input>
                    </div>
                    <div>
                        <input id="password" name="password" placeholder="Password" type="text" required class="validate" autocomplete="off"></input>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
                <div class="register">
                    Don't have an account yet?
                    <Link to='/register'><button id="register-link">Register</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Login;