import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders the home landing page', () => {
    render(<BrowserRouter><Home/></BrowserRouter>);
});