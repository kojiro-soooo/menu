import { formToJSON } from "axios";
import { React, useState } from "react";
import Axios from "axios";
import "./Create.css";
// import { Recipes } from '../Data';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [country, setCountry] = useState();
  const [ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();
  const [totalTime, setTotalTime] = useState();
  const [servings, setServings] = useState();
  const [tags, setTags] = useState();
  // const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("before fetch")

    const newRecipe = {
      title: title,
      description: description,
      country: country,
      ingredients: ingredients,
      instructions: instructions,
      totalTime: totalTime,
      servings: servings,
      tags: tags
    }

    await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe)
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(error=>{
      console.log(error);
    });


    // navigate("/");
  }

  return (
    <div className="create-container">
      <div className="create-recipe-card">
        <form className="recipe-form" onSubmit={handleSubmit}>
          <h3>Share your very own recipe with the world!</h3>
          <label>Recipe Name: </label>
          <input onChange={(event) => {setTitle(event.target.value)}} placeholder="My mom's mapo tofu" required></input>
          <label>Description: </label>
          <input onChange={(event) => {setDescription(event.target.value)}} placeholder="Share the story behind your recipe!"></input>
          <label>Country: </label>
          <input onChange={(event) => {setCountry(event.target.value.toLowerCase())}} placeholder="From which country does your recipe originate?" required></input>
          <label>Ingredients (separated with commas): </label>
          <textarea onChange={(event) => {setIngredients(event.target.value)}} rows="10" placeholder="1 cup cooking wine, 300g minced pork, 400g tofu..." required></textarea>
          <label>Instructions: </label>
          <textarea onChange={(event) => {setInstructions(event.target.value)}} rows="10" placeholder="1. Cut tofu into 1-inch cubes 2. Heat vegetable oil on a pan on medium heat..." required></textarea>
          <label>Total Time To Cook (minutes): </label>
          <input type="number" onChange={(event) => {setTotalTime(event.target.value)}} placeholder="30" required></input>
          <label>Servings: </label>
          <input type="number" onChange={(event) => {setServings(event.target.value)}} placeholder="2" required></input>
          <label>Tags (separate with commas): </label>
          <input type="text" onChange={(event) => {setTags(event.target.value)}} placeholder="noodles, comforting, warm, italian"></input>
          <button>Submit!</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
