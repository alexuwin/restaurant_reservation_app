import React from 'react';
import ReactDOM from 'react-dom'
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import Register from './Register';

/*
test('test', () => {
    expect(true).toBe(true);
})
*/

test("Register form should be in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const linkElement = screen.getByTestId('register-1');
    expect(linkElement).toBeInTheDocument();
});

test("Register name form should be in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Name (Optional)');
    expect(userInputEl).toBeInTheDocument();
});

test("Register email form should be in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Email (Optional)');
    expect(userInputEl).toBeInTheDocument();
});

test("Register username form should be in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    expect(userInputEl).toBeInTheDocument();
});

test("Register password form should be in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Password');
    expect(userInputEl).toBeInTheDocument();
});

test("Name form should be in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Name (Optional)');
    expect(userInputEl.value).toBe("");
});

test("Email form should be in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Email (Optional)');
    expect(userInputEl.value).toBe("");
});

test("Register username form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    expect(userInputEl.value).toBe("");
});

test("Register password form should be EMPTY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Password');
    expect(userInputEl.value).toBe("");
});

test("Name form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Name (Optional)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Email form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Email (Optional)');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register username form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register password form should be LETTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Password');
    const testValue = "alex nguyen";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Name form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Name (Optional)');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Email form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Email (Optional)');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register username form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register password form should be NUMBERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Password');
    const testValue = "1234567890";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Name form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Name (Optional)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Email form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Email (Optional)');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register username form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register password form should be CHARACTERS ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Password');
    const testValue = "!@#$%^&*()-=+_;'.,<>/?";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Name form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Name (Optional)');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Email form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Email (Optional)');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register username form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Username');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});

test("Register password form should be MIXED ONLY in the document", async ()=>{
    render(<BrowserRouter><Register/></BrowserRouter>);
    const userInputEl = screen.getByPlaceholderText('Password');
    const testValue = "alex nguyen 1234567890 !@#$%^&*()";

    fireEvent.change(userInputEl, {target:{value:testValue}})
    expect(userInputEl.value).toBe(testValue);
});