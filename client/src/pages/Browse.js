import { React, useState, useEffect } from "react";
import { backend_url } from "../config";
import { useLocation } from "react-router-dom";
import {RecipeCard} from "../components/RecipeCard";
import "./Browse.css";

const Browse = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const location = useLocation();
  const [country, setCountry] = useState(
    location.state ? location.state.country : ""
  );
  const [search, setSearch] = useState(country);

  // scroll to top on first render
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(filteredResult)
  }, []);

  // fetch data on first render
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`${backend_url}/browse`, {
        method: "GET",
      });
      const json = await response.json();
      setAllRecipes(json);
      setSearch(country);
    };
    fetchRecipes();
  }, []);

  // update filter results whenever search text is updated
  useEffect(() => {
    const filtered = allRecipes.filter((recipe) => {
      return recipe.country.startsWith(search.toLowerCase());
    });
    setFilteredResult(filtered);
  }, [search]);

  // wait for recipes data to be fetched, then use country data from home page to update filter results
  useEffect(() => {
    const filtered = allRecipes.filter((recipe) => {
        return recipe.country.startsWith(search.toLowerCase());
    });
    setFilteredResult(filtered);
  }, [allRecipes]);

  // resets search
  const handleReset = () => {
    setSearch("");
  };

  return (
    <div className="browse-container">
      <div className="browse-content">
        <div className="filter-helper">
          <div className="results-text">
            {search ? (
              <>
                <h3>Showing Results For: {search}</h3>
                <button
                  className="reset-button"
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Reset Filter
                </button>
              </>
            ) : (
              <h3>Showing All Results</h3>
            )}
          </div>
        </div>
        <div className="results-container">
          <div className="filter">
            <div className="filter__content">
              <form>
                <label>Filter by country:</label>
                <input
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
    </div>
  );
};

export default Browse;
