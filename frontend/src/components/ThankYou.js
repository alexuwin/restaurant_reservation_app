import React from 'react';
import {Link} from 'react-router-dom';

function ThankYou(){
    return(
        <section data-testid="thank-you">
            <div className="welcomeScreen">
                <h1>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p>
                        Thank you for reserving!
                        <h5>
                            Your payment has been received.
                            <br></br><br></br><br></br>
                            <Link to='/home'><button id="register-link" className="btn-work-reg">Home</button></Link>
                        </h5>

                    </p>
                </h1>
            </div>
        </section>
    );
}

export default ThankYou;