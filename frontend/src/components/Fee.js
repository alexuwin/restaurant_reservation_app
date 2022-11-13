import React from 'react';
import {useState} from 'react';

//import {Link} from 'react-router-dom';

function Fee(e) {

    const [number, setNumber] = useState('')
    //const [name, setName] = useState('')
    var [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')

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

    return(
        <section>
            <div>
                <h1>Payment Information</h1>
                <form action="/fee" method="GET">
                    <div>
                        <label for="card-brand">Brand: &nbsp;
                        <select name="card-brand" id="card-brand">
                            <option value="mastercard">Mastercard</option>
                            <option value="visa">Visa</option>
                            <option value="american-express">American Express</option>
                            <option value="jcb">JCB</option>
                            <option value="discover">Discover</option>
                        </select>
                        </label>
                    </div>
                    <div>
                        <label for="card-number">Card Number: &nbsp;
                        <input id="card-number" name="card-number" placeholder="Card Number" value={number} onChange={handleCardNum} required class="validate" autocomplete="off"></input>
                        </label>
                    </div>
                    <div>
                        <label for="expiration-date">Expiry Date: &nbsp;
                        <input id="expiration-date" name="expiration-date" placeholder="MM / YY" value={expiry} onChange={handleExpiration} required class="validate" autocomplete="off" maxLength="5"></input>
                        </label>
                    </div>
                    <div>
                        <label for="card-holder">Card Holder: &nbsp;
                        <input id="card-holder" name="card-holder" placeholder="Card Holder" type="text" required class="validate" autocomplete="off"></input>
                        </label>
                    </div>
                    <div>
                        <label for="cvv">CVV: &nbsp;
                        <input id="cvv" name="cvv" placeholder="CVV/CVC" value={cvv} onChange={handleCvv} required class="validate" autocomplete="off" maxLength="4"></input>
                        </label>
                    </div>
                        <label for="billing-address">Address: &nbsp;
                        <input id="billing-address" name="billing-address" placeholder="Address" type="text" required class="validate" autocomplete="off"></input>
                        </label>
                    <div>
                        <label for="zip-code">Zip Code: &nbsp;
                        <input id="zip-code" name="zip-code" placeholder="Zip Code" type="text" required class="validate" autocomplete="off"></input>
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit"></input>
                    </div>
                    <div>
                        <strong>NOTE: No show will result in a minimum of a $10 charge!</strong>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Fee;