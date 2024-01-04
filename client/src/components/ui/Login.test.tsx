import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginButton from "./Login";

describe("Log In Component", () => {
    it("should have button with text Log In", () => {
        render(<LoginButton />);
        const LoginButtonComponent = screen.getByRole("button", {
            name: "Log In",
        });
        expect(LoginButtonComponent).toBeInTheDocument();
    });
});
