import React,{ useState } from 'react';
import dish1 from './../../src/components/image/dish1.jpeg';
import reportWebVitals from "./../reportWebVitals";


function Reserve() {
    return(
        <section>
            <div className='info1'>
                <br></br>
                <div className='GuestPick'>
                    <p id='guesttext'># of Guests</p>
                        <select id='guestNum'>
                            <option value="1" label="1 Guest">1 Guest</option>
                            <option value="2" label="2 Guests">2 Guests</option>
                            <option value="3" label="3 Guests">3 Guests</option>
                            <option value="4" label="4 Guests">4 Guests</option>
                            <option value="5" label="5 Guests">5 Guests</option>
                            <option value="6" label="6 Guests">6 Guests</option>
                            <option value="7" label="7 Guests">7 Guests</option>
                            <option value="8" label="8 Guests">8 Guests</option>
                            <option value="9" label="9 Guests">9 Guests</option>
                            <option value="10" label="10 Guests">10 Guests</option>
                            <option value="11" label="11 Guests">11 Guests</option>
                            <option value="12" label="12 Guests">12 Guests</option>
                            <option value="13" label="13 Guests">13 Guests</option>
                            <option value="14" label="14 Guests">14 Guests</option>
                            <option value="15" label="15 Guests">15 Guests</option>
                            <option value="16" label="16 Guests">16 Guests</option>
                            <option value="17" label="17 Guests">17 Guests</option>
                            <option value="18" label="18 Guests">18 Guests</option>
                        </select>   
                </div>
                <div className="divider" aria-hidden="true"></div>
                <div className='DatePick'>
                    <p>Date</p>
                    <div className='dt'>
                    <input type={'datetime-local'} className="date-input-box"></input>
                    </div>
                    {/*<DateTimePicker onChange={onChange} value={value} className="dtime" minDate={value} disableClock={true}/>*/}
                </div>       
                <span>
                    <div className='userCredentialsReserve'>
                        <p>First Name&emsp;&emsp;</p>
                        <input type={'text'} id='fname' placeholder='first name' className="inp-text-input-reserve"></input>
                    </div>
                    <div className='userCredentialsReserve'>
                        <p>Last Name&emsp;&emsp;</p>
                        <input type={'text'} id='lname' placeholder='last name' className="inp-text-input-reserve"></input>
                    </div>
                    <div className='userCredentialsReserve'>
                        <p>Email&emsp;&emsp;</p>
                        <input type={'email'} id='email' placeholder='startdust@gmail.com' className="inp-text-input-reserve"></input>
                    </div>
                    <div className='userCredentialsReserve'>
                        <p>Contact Phone&emsp;&emsp;</p>
                        <input type={'tel'} id='phone' placeholder='phone number' className="inp-text-input-reserve"></input>
                    </div>
                    <div className='userCredentialsReserve'>
                        <p>Comment (optional)&emsp;&emsp;</p>
                        <textarea id='comment' className="commentBox"></textarea>
                    </div>
                </span>    
                <br></br> 
                <span className='s3'>
                    <button className='TableGenButton'>Tables Generation</button>  
                    <br></br>
                    <br></br>
                    <p id='tableListText'>List of Table(s)</p>
                    <ol>
                        <li></li>
                        <li></li>
                    </ol>
                </span> 
            </div>
        </section>
    );
}

export default Reserve;