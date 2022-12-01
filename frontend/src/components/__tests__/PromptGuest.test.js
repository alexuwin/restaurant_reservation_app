import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import PromptGuest from '../PromptGuest';

test('should render Register component', () => {
    render(<BrowserRouter>
            <PromptGuest/>
            </BrowserRouter>);
    const element = screen.getByTestId('prompt-guest');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Continue as Guest?');
})