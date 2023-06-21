import { React, useState, useEffect } from "react";
import { Recipes } from "../Data";
import { Link } from "react-router-dom";
import "./Browse.css";

const Browse = () => {
  const [allRecipes, setAllRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("/api/browse", {
        method: "GET",
      });
      const json = await response.json();
      console.log(json);
      setAllRecipes(json);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="page-container">
      <div className="browse-container">
        <div className="browse-cards">
          {allRecipes &&
            allRecipes.map((recipe) => (
              <Link
              className="card"
                style={{ textDecoration: "none"}}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
