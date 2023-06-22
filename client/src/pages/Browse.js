import { React, useState, useEffect } from "react";
import { backend_url } from "../config"
import { Link, useLocation } from "react-router-dom";
import "./Browse.css";

const Browse = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [country, setCountry] = useState(
    location.state ? location.state.country : ""
  )
  // const { country } = location.state || {};
  const [search, setSearch] = useState(country);

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

  // scroll to top on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // update filter results whenever search text is updated
  useEffect(() => {
    const filtered = allRecipes.filter((recipe) => {
      {
        return recipe.country.startsWith(search.toLowerCase());
      }
    });
    setFilteredResult(filtered);
  }, [search]);

  // wait for recipes data to be fetched, then use country data from home page to update filter results
  useEffect(() => {
    const filtered = allRecipes.filter((recipe) => {
      {
        setLoading(false);
        return recipe.country.startsWith(search.toLowerCase());
      }
    });
    setFilteredResult(filtered);
  }, [allRecipes]);

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
              {/* <h3>Filter : </h3> */}
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
            {loading === true ? (
              <p className="loading">Loading...</p>
            ) : search ? (
              filteredResult.length === 0 ? (
                <p className="no-results">
                  There aren't any recipes from that country... yet!
                  <br></br>Be the first one to add a recipe by clicking "Create"
                </p>
              ) : (
                filteredResult &&
                filteredResult.map((recipe) => (
                  <Link
                    className="card"
                    style={{ textDecoration: "none" }}
                    to={`/browse/recipes/${recipe._id}`}
                  >
                    <div className="browse-card">
                      <div className="browse-card__image">
                        <img src={recipe.imageURL}></img>
                      </div>
                      <div className="browse-card__text">
                        <h2 className="browse-card__title">{recipe.title}</h2>
                        <p>Authenticity: {recipe.authenticity}</p>
                        <p>Taste: {recipe.taste}</p>
                        <p>Complexity: {recipe.complexity}</p>
                      </div>
                    </div>
                  </Link>
                ))
              )
            ) : (
              allRecipes &&
              allRecipes.map((recipe) => (
                <Link
                  className="card"
                  style={{ textDecoration: "none" }}
                  to={`/browse/recipes/${recipe._id}`}
                >
                  <div className="browse-card">
                    <div className="browse-card__image">
                      <img src={recipe.imageURL}></img>
                    </div>
                    <div className="browse-card__text">
                      <h2 className="browse-card__title">{recipe.title}</h2>
                      <p>Authenticity: {recipe.authenticity}</p>
                      <p>Taste: {recipe.taste}</p>
                      <p>Complexity: {recipe.complexity}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
