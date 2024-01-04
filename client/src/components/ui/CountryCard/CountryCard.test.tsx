import { render, screen } from "@testing-library/react";
import { CountryCard } from "./CountryCard";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

describe("CountryCard", () => {
    it("renders CountryCards with name of country", () => {
        render(
            <CountryCard Countries={[{ id: 0, country: "India", url: "" }]} />,
            { wrapper: BrowserRouter }
        );
        const countryCardComponent = screen.getByText(/India/);
        expect(countryCardComponent).toBeInTheDocument();
    });
});
