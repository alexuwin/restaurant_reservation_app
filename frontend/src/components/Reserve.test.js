import React from 'react';
import ReactDOM from 'react-dom'
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import Reserve from './Reserve';
import Holidays from 'date-holidays';

/*
test('test', () => {
    expect(true).toBe(true);
})
*/

test("Reserve fname form should be in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('first name');
    expect(userInputEl).toBeInTheDocument();
});

test("Reserve lname form should be in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('last name');
    expect(userInputEl).toBeInTheDocument();
});

test("Reserve email form should be in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('startdust@gmail.com');
    expect(userInputEl).toBeInTheDocument();
});

test("Reserve phone number form should be in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('phone number');
    expect(userInputEl).toBeInTheDocument();
});

test("Reserve fname form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('first name');
    const testValue = "alex";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Reserve lname form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('last name');
    const testValue = "nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Reserve phone number form should NOT be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('phone number');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Reserve fname form should NOT be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('first name');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Reserve lname form should NOT be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('last name');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Reserve phone number form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('phone number');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Reserve fname form should NOT be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('first name');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Reserve lname form should NOT be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('last name');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});

test("Reserve phone number form should NOT be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Reserve/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('phone number');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe("");
});