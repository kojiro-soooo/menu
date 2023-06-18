import React from "react";
import { Recipes } from "../Data";
import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <div>
      {Recipes.map((recipe) => (
        <Link to={`/browse/recipes/${recipe.id}`}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} height="64" width="64"></img>
        </Link>
        
      ))}
    </div>
  );
};

export default Browse;
