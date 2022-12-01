import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import Fee from '../Fee';
import FeeFail from '../FeeFail';

test('should render Fee component', () => {
    render(<BrowserRouter>
            <Fee/>
            </BrowserRouter>);
    const feeElement = screen.getByTestId('fee-1');
    expect(feeElement).toBeInTheDocument();
    expect(feeElement).toHaveTextContent('Payment Information');
})

test('should render FeeFail component', () => {
    render(<BrowserRouter>
            <FeeFail/>
            </BrowserRouter>);
    const feeElement = screen.getByTestId('fee-2');
    expect(feeElement).toBeInTheDocument();
    expect(feeElement).toHaveTextContent('Payment Failed, please re-enter information.');
})