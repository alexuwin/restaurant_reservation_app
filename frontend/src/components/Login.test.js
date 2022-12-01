import React from 'react';
import ReactDOM from 'react-dom'
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import Login from './Login';

test("Login form should be in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const linkElement = screen.getByTestId('login-1');
    expect(linkElement).toBeInTheDocument();
});

test("Login username form should be in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    expect(userInputEl).toBeInTheDocument();
});

test("Login password form should be in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const passwordInputEl = screen.getByPlaceholderText('Password');
    expect(passwordInputEl).toBeInTheDocument();
});

test("Login username form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    expect(userInputEl.value).toBe("");
});

test("Login password form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const passwordInputEl = screen.getByPlaceholderText('Password');
    expect(passwordInputEl.value).toBe("");
});

test("Login username form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Login password form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const passwordInputEl = screen.getByPlaceholderText('Password');
    const testValue = "alex nguyen";

    fireEvent.change(passwordInputEl, {target:{value:testValue}})
    expect(passwordInputEl.value).toBe(testValue);
});

test("Login username form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Login password form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const passwordInputEl = screen.getByPlaceholderText('Password');
    const testValue = "1234567890";

    fireEvent.change(passwordInputEl, {target:{value:testValue}})
    expect(passwordInputEl.value).toBe(testValue);
});

test("Login username form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Login password form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const passwordInputEl = screen.getByPlaceholderText('Password');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(passwordInputEl, {target:{value:testValue}})
    expect(passwordInputEl.value).toBe(testValue);
});

test("Login username form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Login password form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Login/></BrowserRouter>);
    const passwordInputEl = screen.getByPlaceholderText('Password');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(passwordInputEl, {target:{value:testValue}})
    expect(passwordInputEl.value).toBe(testValue);
});