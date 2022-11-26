import React from 'react';
import {useState} from 'react';

//import {Link} from 'react-router-dom';

function Fee(e) {

    const [number, setNumber] = useState('')
    //const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    const [zip, setZip] = useState('')
    //const [ranNum, setRandNum] = useState('');
    //const [ranPoints, setPoints] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [sameAdd, setAddress] = useState('');

    var dinerNumTemp;
    var pointsNumTemp;
    
    const handleCardNum = (e) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Allows only numerical values/inputs
    
        if (inputNumbersOnly.length > 16) { // Allows up to 16 digits
          inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }
    
        //Splits after 4 digits
        const splits = inputNumbersOnly.match(/.{1,4}/g); 
        let spacedNumber = "";
        if (splits) {
          spacedNumber = splits.join(" ");
        }
        setNumber(spacedNumber)
    };

    var handleExpiration = (e) => {
        //var inputChar = String.fromCharCode(e.keyCode);
        var code = e.keyCode;
        var allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
          return;
        }

        e.target.value = e.target.value.replace(
          /[^0-9]/g, '' // Allows only numerical values/inputs
          ).replace(
              /^([2-9])$/g, '0$1' // To handle 3 > 03, adds a 0 in front of single digits to keep formatting consistent
          ).replace(
              /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3, any month greater than 12 (max month) will split it into 2 different fields
          ).replace(
              /^0{1,}/g, '0' // To handle 00 > 0, can not enter 00/00
          ).replace(
              /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
          );

        setExpiry(e.target.value);
    };

    const handleCvv = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // To allow only numerical values/inputs
        setCvv(value);
    };

    const handleZip = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // To allow only numerical values/inputs
        setZip(value);
    };

    //OLD: USED FOR GENERATING RANDOM NUMBERS FOR DINER NUMBER
    // function randomNumberInRange(min, max) {
    //     //console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    
    // const handleClick = () => {
    //     const value = randomNumberInRange(1, 18);
    //     //console.log(value)
    //     setRandNum(value);
    // };

    //OLD: USED FOR GENERATING RANDOM NUMBERS FOR POINTS
    // function randomNumberInRangePOINTS() {
    //     //console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    //     setPoints(Math.floor(Math.random() * (900000 - 1 + 1)) + 1)
    //     return Math.floor(Math.random() * (900000 - 1 + 1)) + 1;
    // }
    
    // const handlePoints = () => {
    //     const value = randomNumberInRangePOINTS(1, Number.MAX_SAFE_INTEGER);
    //     setPoints(value);
    // }

    function loadNumber(){
        dinerNumTemp = (Math.floor(Math.random() * (16 - 1 + 1)) + 1);
        document.getElementById('dinerNum').value = dinerNumTemp;
        pointsNumTemp = (Math.floor(Math.random() * (1500 - 1 + 1)) + 1);
        document.getElementById('points').value = pointsNumTemp;
    }
    window.onload = loadNumber;

    const handleChecked = (e) => {

        if (e.target.checked) {
            console.log('✅ Checkbox is checked');
            //console.log(document.getElementById("mailingAddress").value)
            let sameAddress = document.getElementById("billingAddress").value 
            setAddress(sameAddress);
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }
        setChecked(current => !current);
    };

    return(
        <section>
            <div>
                <h1>Payment Information</h1>
                <form action="/fee" method="POST">
                    <div>
                        <span>
                            <div>
                                <label for="paymentType">Payment Type: &nbsp;
                                <select name="paymentType" id="paymentType">
                                    <option value="creditCard">Credit Card(s)</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Check">Check</option>
                                </select>
                                </label>
                            </div>
                            <div>
                                <label for="cardBrand">Brand: &nbsp;
                                <select name="cardBrand" id="cardBrand">
                                    <option value="mastercard">Mastercard</option>
                                    <option value="visa">Visa</option>
                                    <option value="american-express">American Express</option>
                                    <option value="jcb">JCB</option>
                                    <option value="discover">Discover</option>
                                </select>
                                </label>
                            </div>
                            <div>
                                <label for="cardNumber">Card Number: &nbsp;
                                <input id="cardNumber" name="cardNumber" placeholder="Card Number (Ex: 1234 4567 8901 2345)" type="text" value={number} onChange={handleCardNum} required className="inp-text-input" autocomplete="off"></input>
                                </label>
                            </div>
                            <div>
                                <label for="expDate">Expiry Date: &nbsp;
                                <input id="expDate" name="expDate" placeholder="MM / YY (Ex: 09/99)" type="text" value={expiry} onChange={handleExpiration} required className="inp-text-input" autocomplete="off" maxLength="5"></input>
                                </label>
                            </div>
                            <div>
                                <label for="cardHolder">Card Holder: &nbsp;
                                <input id="cardHolder" name="cardHolder" placeholder="Card Holder (Ex: John Doe)" type="text" required className="inp-text-input" autocomplete="off"></input>
                                </label>
                            </div>
                            <div>
                                <label for="cvv">CVV: &nbsp;
                                <input id="cvv" name="cvv" placeholder="CVV/CVC (Ex: 123)" value={cvv} onChange={handleCvv} type="text" required className="inp-text-input" autocomplete="off" maxLength="4"></input>
                                </label>
                            </div>
                                <label for="billingAddress">Address: &nbsp;
                                <input id="billingAddress" name="billingAddress" placeholder="Address (Ex: 1234 Valley Rd)" type="text" required className="inp-text-input" autocomplete="off"></input>
                                </label>
                            <div>
                                <label for="zipCode">Zip Code: &nbsp;
                                <input id="zipCode" name="zipCode" placeholder="Zip Code (Ex: 01923)" value={zip} onChange={handleZip} type="text" required className="inp-text-input" autocomplete="off"></input>
                                </label>
                            </div>
                            <div>
                                <label for="dinerNum">Diner #: {document.getElementById('dinerNum').value} &nbsp;
                                <input type="hidden" id="dinerNum" name="dinerNum" className="paymentButton" value={document.getElementById('dinerNum').value}></input>
                                </label>
                            </div>
                            <div>
                                <label>Is the billing address above the same as the mailing address? &nbsp;</label>
                                <input type="checkbox" id="mailingAddress" name="mailingAddress" value={sameAdd} onChange={handleChecked}></input>
                            </div>
                            <div>
                                <label for="points">Points: {document.getElementById('points').value} &nbsp;
                                <input type="hidden" id="points" name="points" value={document.getElementById('points').value}></input>
                                </label>
                            </div>
                            <input type="submit" value="Submit" className="inp-text-input-submit-payment"/>
                        </span>
                    </div>
                    <div>
                        <strong><u>NOTE: No show will result in a minimum of a $10 charge!</u></strong>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Fee;