import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import Browse from "../../pages/Browse/Browse";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
    it("should render the navbar", () => {
        render(<Navbar />, {wrapper: BrowserRouter});
    })

    it("renders Navbar with Login button when user is not logged in", () => {
        render(<Navbar userId="" isLoading={false} isAuthenticated={false} />, {wrapper: BrowserRouter});
        const LogInButton = screen.getByText(/Log In/);
        expect(LogInButton).toBeInTheDocument();
    });
    it("renders Navbar with Logout button user when is not logged in", () => {
        render(<Navbar userId="" isLoading={false} isAuthenticated={true} />, {wrapper: BrowserRouter});
        const LogInButton = screen.getByText(/Log Out/);
        expect(LogInButton).toBeInTheDocument();
    });

})