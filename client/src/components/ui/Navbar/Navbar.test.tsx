import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
    it("should render the navbar", () => {
        render(<Navbar />, { wrapper: BrowserRouter });
    });

    it("renders Navbar with Login button when user is not logged in", () => {
        render(<Navbar userId="" isLoading={false} isAuthenticated={false} />, {
            wrapper: BrowserRouter,
        });
        const LogInButton = screen.getByText(/Log In/);
        expect(LogInButton).toBeInTheDocument();
    });
    it("renders Navbar with Logout button user when is not logged in", () => {
        render(<Navbar userId="" isLoading={false} isAuthenticated={true} />, {
            wrapper: BrowserRouter,
        });
        const LogInButton = screen.getByText(/Log Out/);
        expect(LogInButton).toBeInTheDocument();
    });

    it("should change URL to / when logo is clicked", () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        const logo = screen.getByTestId("logo");
        fireEvent.click(logo);
        expect(window.location.pathname).toBe("/");
    });

    it("should change URL to / when Home is clicked", () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        const aboutButton = screen.getByText(/Home/i);
        fireEvent.click(aboutButton);
        expect(window.location.pathname).toBe("/");
    });
    it("should change URL to /about when About is clicked", () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        const aboutButton = screen.getByText(/About/i);
        fireEvent.click(aboutButton);
        expect(window.location.pathname).toBe("/about");
    });
    it("should change URL to /about when Browse is clicked", () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        const aboutButton = screen.getByText(/Browse/i);
        fireEvent.click(aboutButton);
        expect(window.location.pathname).toBe("/browse");
    });
});
