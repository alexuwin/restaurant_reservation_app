import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import ThankYou from '../ThankYou';

test('should render Register component', () => {
    render(<BrowserRouter>
            <ThankYou/>
            </BrowserRouter>);
    const element = screen.getByTestId('thank-you');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Thank you for reserving!');
})