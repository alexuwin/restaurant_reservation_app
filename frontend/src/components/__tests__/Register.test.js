import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import Register from '../Register';
import RegisterFail from '../RegisterFail';

test('should render Register component', () => {
    render(<BrowserRouter>
            <Register/>
            </BrowserRouter>);
    const registerElement = screen.getByTestId('register-1');
    expect(registerElement).toBeInTheDocument();
    expect(registerElement).toHaveTextContent('Register');
})

test('should render RegisterFail component', () => {
    render(<BrowserRouter>
            <RegisterFail/>
            </BrowserRouter>);
    const registerElement = screen.getByTestId('register-2');
    expect(registerElement).toBeInTheDocument();
    expect(registerElement).toHaveTextContent('The username is taken.');
})