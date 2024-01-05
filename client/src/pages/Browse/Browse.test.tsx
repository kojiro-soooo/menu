import { screen, render } from '@testing-library/react';
import Browse from './Browse'
import { BrowserRouter } from 'react-router-dom';

describe('Browse', () => {
    window.scrollTo = jest.fn();
    it('renders Browse component', () => {
        render(<Browse />, {wrapper: BrowserRouter});
    });
});