import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import NavBarElements from "./NavBarElements";

describe("NavBarElements Component", () => {
    it("renders NavBar with Login button when user is not logged in", () => {
        render(
            <NavBarElements
                userId=""
                isLoading={false}
                isAuthenticated={false}
                showSidebar={false}
            />,
            {
                wrapper: BrowserRouter,
            }
        );
        const LogInButton = screen.getByText(/Log In/);
        expect(LogInButton).toBeInTheDocument();
    });
    it("renders NavBar with Logout button user when is not logged in", () => {
        render(
            <NavBarElements
                userId=""
                isLoading={false}
                isAuthenticated={true}
                showSidebar={false}
            />,
            {
                wrapper: BrowserRouter,
            }
        );
        const LogInButton = screen.getByText(/Log Out/);
        expect(LogInButton).toBeInTheDocument();
    });

    it("should change URL to / when Home is clicked", () => {
        render(
            <NavBarElements
                userId=""
                isLoading={false}
                isAuthenticated={false}
                showSidebar={false}
            />,
            {
                wrapper: BrowserRouter,
            }
        );
        const aboutButton = screen.getByText(/Home/i);
        fireEvent.click(aboutButton);
        expect(window.location.pathname).toBe("/");
    });
    it("should change URL to /about when About is clicked", () => {
        render(
            <NavBarElements
                userId=""
                isLoading={false}
                isAuthenticated={false}
                showSidebar={false}
            />,
            {
                wrapper: BrowserRouter,
            }
        );
        const aboutButton = screen.getByText(/About/i);
        fireEvent.click(aboutButton);
        expect(window.location.pathname).toBe("/about");
    });
    it("should change URL to /about when Browse is clicked", () => {
        render(
            <NavBarElements
                userId=""
                isLoading={false}
                isAuthenticated={false}
                showSidebar={false}
            />,
            {
                wrapper: BrowserRouter,
            }
        );
        const aboutButton = screen.getByText(/Browse/i);
        fireEvent.click(aboutButton);
        expect(window.location.pathname).toBe("/browse");
    });

    it("should render Dropdown when user is authenticated", () => {
        render(
            <NavBarElements
                userId=""
                isLoading={false}
                isAuthenticated={true}
                showSidebar={false}
            />,
            {
                wrapper: BrowserRouter,
            }
        );
        const dropdownMenu = screen.getByText(/My Account/i);
        expect(dropdownMenu).toBeInTheDocument();
    });
});
