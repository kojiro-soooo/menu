import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo";
import { BrowserRouter } from "react-router-dom";

describe("Logo component", () => {
    it("should change URL to / when logo is clicked", () => {
        render(<Logo />, {
            wrapper: BrowserRouter,
        });
        const logo = screen.getByTestId("logo");
        fireEvent.click(logo);
        expect(window.location.pathname).toBe("/");
    });
});
