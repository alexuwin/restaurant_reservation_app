import { faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker'
import React,{ useCallback, useEffect, useState } from 'react';
import dish1 from './../../src/components/image/dish1.jpeg';
import reportWebVitals from "./../reportWebVitals";
import Holidays from 'date-holidays';

function Reserve2() {

    const hd = new Holidays('US');
    const holiday = hd.getHolidays();
    //console.log(holiday)

    const [guestnum, setGuestNum] = useState(1);
    const minGuest = 1;
    const maxGuest = 16;

    const handleNumGuest = (e) => {
        const inputVal = e.target.value.replace(/ /g,"");
        let value = inputVal.replace(/\D/g, "");
        value = Math.max(minGuest,Math.min(maxGuest, Number(value)));
        setGuestNum(value)
    }

    function isWeekend(date = new Date()){
        return date.getDay() === 6 || date.getDay() === 0;
    }

    //const [reserveDate, setDate] = useState(new Date())
    const [reserveDate,setDate] = useState();

    const [checked,setChecked] = React.useState(false);

    const handleResDate = (e) =>{
        console.log("HIGH TRAFFIC")
        console.log(e)
        console.log(e.getDay())
        if(isWeekend(e)||hd.isHoliday(e)){
            alert("Please note that $10 hold fee will be applied for reservation during weekend and holiday! Thank you.")
            //setHoldFee("true");
            setChecked(true);
        }
        else{
            //setHoldFee("false");
            setChecked(false);
        }
        // if(hd.isHoliday(e)){
        //     alert("Please note that $5 hold fee will be applied for reservation during holidays! Thank you")
        // }
        
        setDate(e)
    }

    const [fname, setFName] = useState('');
    const handleFNameInput = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setFName(result);
    }

    const [lname, setLName] = useState('');
    const handleLNameInput = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setLName(result);
    }

    const [phoneNum, setPhoneNum] = useState('');
    const handlePhoneNum = (e) => {
        const inputVal = e.target.value.replace(/ /g,"");
        let result = inputVal.replace(/\D/g, "");
        setPhoneNum(result);
    }

   
    return(
        <section data-testid="reserve-2">
            <div>
                <h1>Sorry! There is no available tables during the timeframe.</h1>
            <form action = '/genTable' method='POST' className='tblForm'>
                <div className='info1'>
                    <span>
                    <div className='GuestPick'>
                        <span>
                                <p>Please pick number of guests (between 1 and 16): &emsp;&emsp;&emsp;</p>
                                <input type={'number'} id='totalGuest' name ='totalGuest' value={guestnum} onChange={handleNumGuest}></input>
                        </span>
                    </div>
                    
                    <br></br><br></br>

                    <div className='DatePick'>
                        <span>
                            <p>Please pick reservation date</p>
                            
                           {/* <input name='rsDate' id='rsDate' type={'date-local'} className='dtime' ></input>*/}
                            <DatePicker name='resDate' id = 'resDate' value={reserveDate} onChange={handleResDate} minDate={new Date()} required></DatePicker>
                            <br></br><br></br>
                            <text>$10 hold fee?</text>
                            <input type={'checkbox'} checked={checked} name='highTraffic' id='highTraffic'></input>
                            {/*<input name='highTraffic' value={holdFee} id='highTraffic'></input>*/}
                            
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
                                <input id='fname' value={fname} onChange={handleFNameInput} name='fname' placeholder='first name' required></input>
                            </div>
                            
                            <div className='pad'>
                                <p>Last Name&emsp;&emsp;</p>
                                <input  id='lname' value={lname} onChange={handleLNameInput} name='lname' placeholder='last name' required></input>
                            </div>
                            
                            <div className='pad'>
                                <p>Email&emsp;&emsp;</p>
                                <input type={'email'} id='email' name='email' placeholder='startdust@gmail.com' required></input>
                            </div>

                            <div className='pad'>
                                <p>Contact Phone&emsp;&emsp;</p>
                                <input value={phoneNum} onChange={handlePhoneNum} id='phone' name='phone' placeholder='phone number'></input>
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

export default Reserve2;