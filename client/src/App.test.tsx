import {screen, render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// TO DO: write unit tests for App.tsx routing. Make sure that changes in URL lead to 

describe("App component", () => {
    window.scrollTo = jest.fn()
    it("should render the App component", ()=>{
        render(<App />);
    })
})
