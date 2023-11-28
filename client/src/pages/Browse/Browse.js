import "./Browse.css";
import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { RecipeCard } from "../../components/ui/RecipeCard";
import useScrollToTop from "../../hooks/useScrollToTop";
import useGetAllRecipes from "./useAllRecipes";
import useFilteredResult from "./useFilteredResult";

const Browse = () => {
    useScrollToTop();
    const location = useLocation();
    const [country, setCountry] = useState(
        location.state ? location.state.country : ""
    );
    const allRecipes = useGetAllRecipes();
    const { search, filteredResult, setSearch } = useFilteredResult(
        allRecipes,
        country
    );
    const handleReset = () => {
        setSearch("");
    };

    return (
        allRecipes && (
            <div className="browse-container">
                <div className="browse-content">
                    <div className="filter">
                        <div className="filter-header">
                            <h2>Filter by</h2>
                            <button
                                className="reset-button"
                                onClick={() => {
                                    handleReset();
                                }}
                            >
                                Reset Filter
                            </button>
                        </div>
                        <div className="filter__content">
                            <form className="filter-country">
                                <label>Country</label>
                                <input
                                    value={search}
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                    }}
                                    placeholder="e.g. Italy"
                                ></input>
                            </form>
                        </div>
                    </div>
                    <div className="browse-cards">
                        <RecipeCard
                            search={search}
                            filteredResult={filteredResult}
                            allRecipes={allRecipes}
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export default Browse;
