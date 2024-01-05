import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer Component", () => {
    it("renders sign up for newsletter text", () => {
        render(<Footer />, { wrapper: BrowserRouter });
        const NewsletterText = screen.getByText(/Sign up for our newsletter:/);
        expect(NewsletterText).toBeInTheDocument();
    });

    it("should update the input value when a user types in their email address", () => {
        render(<Footer />, { wrapper: BrowserRouter });
        const newsletterInput = screen.getByRole("textbox", {
            name: /userEmail/i,
        }) as HTMLInputElement;
        fireEvent.change(newsletterInput, {
            target: { value: "test123@test.com" },
        });
        expect(newsletterInput.value).toBe("test123@test.com");
    });

    it("should clear the input field once submitted", () => {
        render(<Footer />, { wrapper: BrowserRouter });
        const newsletterInput = screen.getByRole("textbox", {
            name: /userEmail/i,
        }) as HTMLInputElement;
        fireEvent.change(newsletterInput, {
            target: { value: "test123@test.com" },
        });
        const submitButton = screen.getByRole("button", { name: /Submit/i });
        fireEvent.click(submitButton);
        expect(newsletterInput.value).toBe("");
    });
});
