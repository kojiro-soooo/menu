import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer Component", () => {
    it("renders sign up for newsletter text", () => {
        render(<Footer/>, {wrapper: BrowserRouter})
        const NewsletterText = screen.getByText(/Sign up for our newsletter:/)
        expect(NewsletterText).toBeInTheDocument();
    });
}) 