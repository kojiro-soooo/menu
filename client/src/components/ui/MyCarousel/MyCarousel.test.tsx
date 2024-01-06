import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MyCarousel } from "./MyCarousel";
import { BrowserRouter } from "react-router-dom";

describe("MyCarousel Component", () => {
    it("should render the carousel", () => {
        render(
            <MyCarousel
                topFive={[
                    {
                        _id: 0,
                        userId: "",
                        title: "Chicken Tikka Masala",
                        description: "",
                        country: "India",
                        ingredients: [""],
                        instructions: [""],
                        totalTime: 0,
                        servings: 0,
                        authenticity: 0,
                        taste: 5,
                        complexity: 0,
                        author: "",
                        tags: [""],
                        imageUrl: "",
                    },
                ]}
            />
        , {wrapper: BrowserRouter});
        const carouselSlide = screen.getByText("Chicken Tikka Masala");
        expect(carouselSlide).toBeInTheDocument();
    });
});
