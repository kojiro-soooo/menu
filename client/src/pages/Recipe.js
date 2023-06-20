import { React, useEffect, useState } from "react";
import { Recipes } from "../Data";
import { useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`/api/browse/recipes/${id}`, {
        method: "GET",
      });
      const json = await response.json();
      console.log(json);
      setRecipe(json);
    };
    getRecipe();
  }, []);

  return (
    recipe && (
      <div className="recipe-container">
        <div className="recipe-book">
          <div className="recipe-card">
            <div className="recipe-card__sticky">
              <div className="recipe-card__sticky-content">
                <p>Total Time: {recipe.totalTime}min</p>
                <p>Servings: {recipe.servings}</p>
              </div>
            </div>
            <div className="recipe-card__left-half">
              <h3 className="recipe-card__title">{recipe.title}</h3>
              <ul>
                {recipe.instructions.map((steps) => (
                  <li>{steps}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-card__right-half">
              <h3 className="recipe-card__title">Ingredients: </h3>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="recipe-details">
          <div className="recipe-details__left-half">
            <div className="recipe-author">
              <p>Author: {recipe.author}</p>
            </div>
            <div className="recipe-description">
              <p>{recipe.description}</p>
            </div>
          </div>
          <div className="recipe-details__right-half">
            <div className="recipe-ratings">
              <p>Authenticity: {recipe.authenticity}</p>
              <p>Taste: {recipe.taste}</p>
              <p>Complexity: {recipe.complexity}</p>
            </div>
            <div className="recipe-img">
              <img src={recipe.imageURL}></img>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Recipe;
