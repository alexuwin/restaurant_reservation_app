import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import Login from '../Login';
import LoginFail from '../LoginFail';

test('should render Login component', () => {
    render(<BrowserRouter>
            <Login/>
            </BrowserRouter>);
    const loginElement = screen.getByTestId('login-1');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent('Login');
})

test('should render LoginFail component', () => {
    render(<BrowserRouter>
            <LoginFail/>
            </BrowserRouter>);
    const loginElement = screen.getByTestId('login-2');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent('Incorrect Username or Password.');
})