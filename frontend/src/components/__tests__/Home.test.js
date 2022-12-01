import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter, Link } from 'react-router-dom';
import {  createMemoryHistory } from 'history';
import Home from '../Home';

test('should render Home component', () => {
    render(<BrowserRouter>
            <Home/>
            </BrowserRouter>);
    const homeElement = screen.getByTestId('home-1');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('Welcome.');
})

/*//test if link redirects to login
it('should open Login from link in Home', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByText } = render(
            <BrowserRouter>
            <MemoryRouter history ={history}>
                <Home/>
            </MemoryRouter>
            </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Make a reservation!'));
    
    expect(history.push).toHaveBeenCalledWith('/login');
})*/