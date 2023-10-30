import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = ({ loading, search, filteredResult, allRecipes }) => {
  // capitalizes country names
  const capitalize = (str) => {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  };
  return (
    <>
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
                  <img src={recipe.imageURL} alt={recipe.title}></img>
                </div>
                <div className="browse-card__text">
                  <h3 className="browse-card__title">{recipe.title}</h3>
                  <p id="browse-card__country">{capitalize(recipe.country)}</p>
                  <div className="browse-card__details">
                    <p>Authenticity: {recipe.authenticity}</p>
                    <p>Taste: {recipe.taste}</p>
                    <p>Complexity: {recipe.complexity}</p>
                  </div>
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
                <img src={recipe.imageURL} alt={recipe.title}></img>
              </div>
              <div className="browse-card__text">
                <h3 className="browse-card__title">{recipe.title}</h3>
                <p id="browse-card__country">{capitalize(recipe.country)}</p>
                <div className="browse-card__details">
                  <p>Authenticity: {recipe.authenticity}</p>
                  <p>Taste: {recipe.taste}</p>
                  <p>Complexity: {recipe.complexity}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
};
