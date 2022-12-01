import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import ThankYou from './ThankYou';

test('renders the thank-you landing page', () => {
    render(<BrowserRouter><ThankYou/></BrowserRouter>);
});