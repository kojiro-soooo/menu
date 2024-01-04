import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecipeCard } from "./RecipeCard";
import { BrowserRouter } from "react-router-dom";

describe("RecipeCard Component", () => {
    it("should render recipe cards with title, country, and reviews", () => {
        render(
            <RecipeCard
                allRecipes={[
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
            />,
            { wrapper: BrowserRouter }
        );
        const recipeCardTitle = screen.getByText(/Chicken Tikka Masala/i)
        const recipeCardCountry = screen.getByText(/India/i)
        const recipeCardRating = screen.getByLabelText(/5 stars/i)
        expect(recipeCardTitle).toBeInTheDocument();
        expect(recipeCardCountry).toBeInTheDocument();
        expect(recipeCardRating).toBeInTheDocument();
    });
});