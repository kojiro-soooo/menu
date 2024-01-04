import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogoutButton from "./Logout";

describe("Log Out Component", () => {
    it("should render button with text Log Out", () => {
        render(<LogoutButton />);
        const LogoutButtonComponent = screen.getByRole("button", {
            name: "Log Out",
        });
        expect(LogoutButtonComponent).toBeInTheDocument();
    });
});
