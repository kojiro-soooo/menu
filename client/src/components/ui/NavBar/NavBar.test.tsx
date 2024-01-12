import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
    it("should render the navbar", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
    });
}); 
