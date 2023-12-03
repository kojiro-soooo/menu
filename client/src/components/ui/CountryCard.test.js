import { render, screen } from '@testing-library/react';
import { CountryCard } from './CountryCard';
import { BrowserRouter } from 'react-router-dom';

describe('CountryCard', () => {
    it('render CountryCards', () => {
        render(<CountryCard />, {wrapper: BrowserRouter});
    });
});