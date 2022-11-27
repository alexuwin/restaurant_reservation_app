import { faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker'
import React,{ useEffect, useState } from 'react';
import dish1 from './../../src/components/image/dish1.jpeg';
import reportWebVitals from "./../reportWebVitals";



function Reserve() {

    const [guestnum, setGuestNum] = useState(1);
    const minGuest = 0;
    const maxGuest = 16;

    const handleNumGuest = event => {
        const value = Math.max(minGuest,Math.min(maxGuest, Number(event.target.value)));
        setGuestNum(value)
    }

    const [reserveDate, setDate] = useState(new Date())

    // GET
    // useEffect(()=>{
    //     fetchItems();
    // },[]);

    // const[items,setItems] = useState([]);

    // const fetchItems = async()=>{
    //     const data = await fetch('/outputTables');
    //     const items = await data.json();
    //     setItems(items);
    // }

    // GET

    return(
        <section >
            
            <div>
            <form action = '/genTable' method='POST' className='tblForm'>
                <div className='info1'>
                    <span>
                    <div className='GuestPick'>
                        <span>
                                <p>Please pick number of guests (between 1 and 16): &emsp;&emsp;&emsp;</p>
                                <input id='totalGuest' name ='totalGuest' value={guestnum} onChange={handleNumGuest}></input>
                        </span>
                    </div>
                    
                    <br></br><br></br>

                    <div className='DatePick'>
                        <span>
                            <p>Please pick reservation date</p>
                            
                           {/* <input name='rsDate' id='rsDate' type={'date-local'} className='dtime' ></input>*/}
                            <DatePicker name='resDate' id = 'resDate' value={reserveDate} onChange={setDate} minDate={new Date()}></DatePicker>
                            
                    {/*<DateTimePicker onChange={onChange} value={value} className="dtime" minDate={value} disableClock={true}/>*/}
                        <br></br><br></br>

                            <p>Please pick your dine in time</p>&nbsp;
                            <select name='timeFrame' id ='timeFrame'>
                                <option value='5'>5:00 p.m - 6:30 p.m</option>
                                <option value='6'>6:30 p.m - 8:00 p.m</option>
                                <option value='8'>8:00 p.m - 9:30 p.m</option>
                            </select>
                            
                        </span>
                    </div>
                    <br></br><br></br>
                    <div className='GuestInfo'>
                        <span>
                            <div className='pad'>
                                <p>First Name&emsp;&emsp;</p>
                                <input  id='fname' name='fname' placeholder='first name' required></input>
                            </div>
                            
                            <div className='pad'>
                                <p>Last Name&emsp;&emsp;</p>
                                <input  id='lname' name='lname' placeholder='last name' required></input>
                            </div>
                            
                            <div className='pad'>
                                <p>Email&emsp;&emsp;</p>
                                <input  id='email' name='email' placeholder='startdust@gmail.com' required></input>
                            </div>

                            <div className='pad'>
                                <p>Contact Phone&emsp;&emsp;</p>
                                <input  id='phone' name='phone' placeholder='phone number'></input>
                            </div>

                            <div className='pad'>
                                <p>Comment (optional)&emsp;&emsp;</p>
                                <textarea id='comment' name='comment' ></textarea>
                            </div>
                            
                        </span>
                    </div>
                    <br></br><br></br>
                    <div className='SubmitButton'>
                        <button type='submit' className='btn btn-primary tblButton'>Make a Reservation</button>
                    </div>
                </span>
                </div>
            </form>

        
            </div> 
            


        </section>
    );
    
}

export default Reserve;