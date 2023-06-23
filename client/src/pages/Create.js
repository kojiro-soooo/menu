import { React, useState, useEffect } from "react";
import "./Create.css";
import { backend_url } from "../config";
import { useNavigate } from "react-router-dom";

const Create = () => {
  // States for managing data for each field in form
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [country, setCountry] = useState();
  const [ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();
  const [totalTime, setTotalTime] = useState();
  const [servings, setServings] = useState();
  const [authenticity, setAuthenticity] = useState();
  const [taste, setTaste] = useState();
  const [complexity, setComplexity] = useState();
  const [tags, setTags] = useState();
  const navigate = useNavigate();

  // scroll to top on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      title: title,
      description: description,
      country: country,
      ingredients: ingredients,
      instructions: instructions,
      totalTime: totalTime,
      servings: servings,
      authenticity: authenticity,
      taste: taste,
      complexity: complexity,
      tags: tags,
      imageURL: "https://fakeimg.pl/779x519?text=Add+an+image!", // placeholder image
    };

    // create a new recipe document in database
    await fetch(`${backend_url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });

    // redirect after function is executed
    navigate("/");
  };

  return (
    <div className="create-container">
      <div className="create-recipe-card">
        <form className="recipe-form" onSubmit={handleSubmit}>
          <h3>Share your very own recipe with the world!</h3>
          <label>Recipe Name: </label>
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Oyako Donburi"
            required
          ></input>
          <label>Description: </label>
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            placeholder="Share the story behind your recipe!"
          ></input>
          <label>Country: </label>
          <input
            onChange={(event) => {
              setCountry(event.target.value.toLowerCase());
            }}
            placeholder="From which country does your recipe originate?"
            required
          ></input>
          <label>Ingredients (separated with commas): </label>
          <textarea
            onChange={(event) => {
              setIngredients(event.target.value);
            }}
            rows="10"
            placeholder="1 cup cooking wine, 300g minced pork, 400g tofu..."
            required
          ></textarea>
          <label>Instructions: </label>
          <textarea
            onChange={(event) => {
              setInstructions(event.target.value);
            }}
            rows="10"
            placeholder="1. Cut tofu into 1-inch cubes 2. Heat vegetable oil on a pan on medium heat..."
            required
          ></textarea>
          <label>Total Time To Cook (minutes): </label>
          <input
            type="number"
            onChange={(event) => {
              setTotalTime(event.target.value);
            }}
            placeholder="30"
            required
          ></input>
          <label>Servings: </label>
          <input
            type="number"
            onChange={(event) => {
              setServings(event.target.value);
            }}
            placeholder="2"
            required
          ></input>
          <div className="ratings">
            <div className="ratings__field">
              <label>Authenticity: </label>
              <input
                type="number"
                onChange={(event) => {
                  setAuthenticity(event.target.value);
                }}
                placeholder="5"
                required
              ></input>
            </div>
            <div className="ratings__field">
              <label>Taste: </label>
              <input
                type="number"
                onChange={(event) => {
                  setTaste(event.target.value);
                }}
                placeholder="5"
                required
              ></input>
            </div>
            <div className="ratings__field">
              <label>Complexity: </label>
              <input
                type="number"
                onChange={(event) => {
                  setComplexity(event.target.value);
                }}
                placeholder="3"
                required
              ></input>
            </div>
          </div>
          <label>Tags (separate with commas): </label>
          <input
            type="text"
            onChange={(event) => {
              setTags(event.target.value);
            }}
            placeholder="noodles, comforting, warm, italian"
          ></input>
          <button type="submit">Submit!</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
