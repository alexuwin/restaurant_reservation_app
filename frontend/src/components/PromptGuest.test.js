import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PromptGuest from './PromptGuest';

test('renders the guest prompt landing page', () => {
    render(<BrowserRouter><PromptGuest/></BrowserRouter>);
});