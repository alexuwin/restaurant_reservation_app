import React from 'react';
import ReactDOM from 'react-dom'
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import Fee from './Fee';

/*
test('test', () => {
    expect(true).toBe(true);
})
*/

test("Fee card number form should be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Number (Ex: 1234 4567 8901 2345)');
    expect(userInputEl).toBeInTheDocument();
});

test("Fee expiry date form should be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('MM / YY (Ex: 09/99)');
    expect(userInputEl).toBeInTheDocument();
});

test("Fee card holder form should be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Holder (Ex: John Doe)');
    expect(userInputEl).toBeInTheDocument();
});

test("Fee cvv/cvc form should be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('CVV/CVC (Ex: 123)');
    expect(userInputEl).toBeInTheDocument();
});

test("Fee address form should be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Address (Ex: 1234 Valley Rd)');
    expect(userInputEl).toBeInTheDocument();
});

test("Fee zip code form should be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Zip Code (Ex: 01923)');
    expect(userInputEl).toBeInTheDocument();
});

test("Fee card number form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Number (Ex: 1234 4567 8901 2345)');
    expect(userInputEl.value).toBe("");
});

test("Fee expiry date form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('MM / YY (Ex: 09/99)');
    expect(userInputEl.value).toBe("");
});

test("Fee card holder form should EMPTY be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Holder (Ex: John Doe)');
    expect(userInputEl.value).toBe("");
});

test("Fee cvv/cvc form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('CVV/CVC (Ex: 123)');
    expect(userInputEl.value).toBe("");
});

test("Fee address form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Address (Ex: 1234 Valley Rd)');
    expect(userInputEl.value).toBe("");
});

test("Fee zip code form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Zip Code (Ex: 01923)');
    expect(userInputEl.value).toBe("");
});

test("Fee card number form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Number (Ex: 1234 4567 8901 2345)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee expiry date form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('MM / YY (Ex: 09/99)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee card holder form should LETTERS ONLY be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Holder (Ex: John Doe)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee cvv/cvc form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('CVV/CVC (Ex: 123)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee address form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Address (Ex: 1234 Valley Rd)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee zip code form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Zip Code (Ex: 01923)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee card number form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Number (Ex: 1234 4567 8901 2345)');
    const testValue = "1234567890123456";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("1234 5678 9012 3456");
});

test("Fee expiry date form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('MM / YY (Ex: 09/99)');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("12/34");
});

test("Fee card holder form should NUMBERS ONLY be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Holder (Ex: John Doe)');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee cvv/cvc form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('CVV/CVC (Ex: 123)');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee address form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Address (Ex: 1234 Valley Rd)');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee zip code form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Zip Code (Ex: 01923)');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee card number form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Number (Ex: 1234 4567 8901 2345)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee expiry date form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('MM / YY (Ex: 09/99)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee card holder form should CHARACTERS ONLY be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Holder (Ex: John Doe)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee cvv/cvc form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('CVV/CVC (Ex: 123)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee address form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Address (Ex: 1234 Valley Rd)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee zip code form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Zip Code (Ex: 01923)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Fee card number form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Number (Ex: 1234 4567 8901 2345)');
    const testValue = "alex nguyen 1234567890123456 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe('1234 5678 9012 3456');
});

test("Fee expiry date form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('MM / YY (Ex: 09/99)');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe('12/34');
});

test("Fee card holder form should MIXED ONLY be in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Card Holder (Ex: John Doe)');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee cvv/cvc form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('CVV/CVC (Ex: 123)');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe('1234567890');
});

test("Fee address form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Address (Ex: 1234 Valley Rd)');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Fee zip code form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Fee/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Zip Code (Ex: 01923)');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe('1234567890');
});