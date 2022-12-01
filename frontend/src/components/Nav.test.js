import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders the nav prompt landing page', () => {
    render(<BrowserRouter><Nav/></BrowserRouter>);
});