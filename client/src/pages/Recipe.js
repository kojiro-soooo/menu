import { React, useEffect, useState } from "react";
import { Recipes } from "../data";
import { useParams, useNavigate } from "react-router-dom";
import { backend_url } from "../config";
import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(id);

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`${backend_url}/browse/recipes/${id}`, {
        method: "GET",
      });
      const json = await response.json();
      // console.log(json);
      setRecipe(json);
    };
    getRecipe();
  }, []);

  const handleDelete = async () => {
    // console.log(id)
    await fetch(`/browse/recipes/${id}`, {
      method: "DELETE",
    });

    navigate("/browse");
  };

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
        <div className="editor">
          <button className="edit">Edit Recipe</button>
          <button className="delete" onClick={()=> {handleDelete()}}>
            Delete Recipe
          </button>
        </div>
      </div>
    )
  );
};

export default Recipe;
