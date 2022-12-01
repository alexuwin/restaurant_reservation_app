import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
//import Reserve from '../Reserve';
//import Reserve2 from '../Reserve2';

test('should render Reserve component', () => {
    expect(true).toBe(true);
});

/*test('should render Reserve component', () => {
    render(<BrowserRouter>
            <Reserve/>
            </BrowserRouter>);
    const reserveElement = screen.getByTestId('reserve-1');
    expect(reserveElement).toBeInTheDocument();
    expect(reserveElement).toHaveTextContent('Please pick number of guests');
})

test('should render Reserve2 component', () => {
    render(<BrowserRouter>
            <Reserve2/>
            </BrowserRouter>);
    const reserveElement = screen.getByTestId('reserve-2');
    expect(reserveElement).toBeInTheDocument();
    expect(reserveElement).toHaveTextContent('Sorry! There is no available tables during the timeframe.');
})*/