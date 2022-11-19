import React,{ useState } from 'react';
import dish1 from './../../src/components/image/dish1.jpeg';
import reportWebVitals from "./../reportWebVitals";


function Reserve() {
    return(
        <section >
            
                <div className='main'>
            <div>
                <h1>Pho Bar and Grill</h1>
                
                <div>
                    <svg height="19" viewBox="0 0 20 19" width="20" className="StarIcon">
                        <path  d="m19.3266897 6.81209154-6.0333852-.87390272-2.7043055-5.44738083c-.1520997-.32725431-.3486048-.49080799-.5889252-.49080799-.24032046 0-.43667804.16355368-.58892523.49080799l-2.70445309 5.44738083-6.03368026.87390272c-.44862764.07185782-.67301522.25539649-.67301522.55076297 0 .16766824.10017039.35928908.30051118.57471558l4.37504149 4.23814161-1.03356962 5.9860941c-.01608037.1118278-.0240468.1917678-.0240468.239526 0 .1676683.04204501.3091797.12613503.425122.08409003.1157954.21022506.1735462.37855262.1735462.14428078 0 .30449439-.0476113.48078838-.1435687l5.39651396-2.8256727 5.39695656 2.8256727c.1684751.0958104.3286887.1435687.4806408.1435687.1606562 0 .2826605-.0576038.3667505-.1735462.0839425-.1157954.1259875-.2574537.1259875-.425122 0-.1037456-.0039832-.1835387-.0120971-.239526l-1.0337172-5.9860941 4.3629444-4.23814161c.2086022-.20749128.3126083-.39911212.3126083-.57471558 0-.29536648-.2242401-.47890515-.6733103-.55076297z"></path>
                    </svg>
                    <span>&nbsp;4.6&nbsp;</span>
                    <span>(90)&nbsp;&nbsp;&nbsp;</span>
                    <span className="cuisine">❧ Vietnamese cuisine </span>
                </div>
                <div>
                    <svg height="1em" width="1em" viewBox="0 0 20 20" >
                        <path d="m10 1.5c3.5898509 0 6.5 2.91014913 6.5 6.5 0 3.1783736-1.8115848 5.4745544-4.9479735 8.6580075l-.8458482.8488788c-.611314.6003241-.75280912.6319201-1.31466848.094788l-.63253781-.6293629-.60151476-.6104719c-2.92840208-3.0013562-4.65745725-5.2721018-4.65745725-8.3618395 0-3.58985087 2.91014913-6.5 6.5-6.5zm0 4c-1.38071187 0-2.5 1.11928813-2.5 2.5s1.11928813 2.5 2.5 2.5c1.3807119 0 2.5-1.11928813 2.5-2.5s-1.1192881-2.5-2.5-2.5z" fillRule="evenodd"></path>
                    </svg>
                    <span className="location">&nbsp;209 Star Esclipe Blv, HTX 77209</span>
                </div>
            </div>
            <br></br>
            <div className='info1'>
                <div className='GuestPick' >
                    <p id='guesttext'>Guests</p>
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
                <div className="divider" aria-hidden="true" ></div>
                <div className='DatePick'>
                    <p>Date</p>
                    <div className='dt'>
                    <input type={'datetime-local'} className='dtime' ></input>
                    </div>
                    {/*<DateTimePicker onChange={onChange} value={value} className="dtime" minDate={value} disableClock={true}/>*/}
                    
                </div>
                                
            </div>

            <div className='customerInfo'>
                <span>
                    <div className='pad'>
                        <p>First Name&emsp;&emsp;</p>
                        <input type={'text'} id='fname' placeholder='first name'></input>
                    </div>
                    
                    <div className='pad'>
                        <p>Last Name&emsp;&emsp;</p>
                        <input type={'text'} id='lname' placeholder='last name'></input>
                    </div>
                    
                    <div className='pad'>
                        <p>Email&emsp;&emsp;</p>
                        <input type={'email'} id='email' placeholder='startdust@gmail.com'></input>
                    </div>

                    <div className='pad'>
                        <p>Contact Phone&emsp;&emsp;</p>
                        <input type={'tel'} id='phone' placeholder='phonenumber'></input>
                    </div>

                    <div className='pad'>
                        <p>Comment (optional)&emsp;&emsp;</p>
                        <textarea id='comment' ></textarea>
                    </div>

                </span>
                
                
                
            </div>
            <br></br>

            <div className='tableCombineGen'>
                <span className='s3'>
                <button className='TableGenButton' >Tables Generation</button>  
                <br></br>
                <br></br>
                <p id='tableListText'>List of table(s)</p>
                <ol>
                    <li></li>
                    <li></li>
                </ol>
                </span>
            </div>
            </div>       


        </section>
    );
    
}

export default Reserve;