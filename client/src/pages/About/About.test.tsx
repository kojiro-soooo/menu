import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom'
import About from './About';

describe('About', () => {
    window.scrollTo = jest.fn();

    it('renders About', () => {
        render(<About />);
    });
});