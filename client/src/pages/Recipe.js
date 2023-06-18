import React from "react";
import { Recipes } from "../Data";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const recipe = Recipes.filter((item) => item.id === parseInt(id));

  return (
    <div>
      <h3>{recipe[0].title}</h3>
    </div>
  );
};

export default Recipe;
