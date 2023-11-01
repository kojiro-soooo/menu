import { React, useState, useEffect} from "react";
import "./Create.css";
import { backend_url } from "../config";
import { useNavigate, Navigate } from "react-router-dom";
const { v4: uuidv4} = require('uuid');

const Create = ( {userId, isAuthenticated, isLoading} ) => {
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
    const [image, setImage] = useState();
    const navigate = useNavigate();

    // scroll to top on first render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // to debug FormData, use formData.entries()
        const formData = new FormData();
        formData.append('recipeId', uuidv4()); // need uuid to create key to correspond to image in S3
        formData.append('userId', userId)
        formData.append('title', title);
        formData.append('description', description);
        formData.append('country', country);
        formData.append('ingredients', ingredients);
        formData.append('instructions', instructions);
        formData.append('totalTime', totalTime);
        formData.append('servings', servings);
        formData.append('authenticity', authenticity);
        formData.append('taste', taste);
        formData.append('complexity', complexity);
        formData.append('tags', tags);
        formData.append('image', image);
    
        // const newRecipe = {
        //     id: uuidv4(), // need uuid to create key to correspond to image in S3
        //     title: title,
        //     description: description,
        //     country: country,
        //     ingredients: ingredients,
        //     instructions: instructions,
        //     totalTime: totalTime,
        //     servings: servings,
        //     authenticity: authenticity,
        //     taste: taste,
        //     complexity: complexity,
        //     tags: tags,
        //     image: image,
        // //   imageURL: "https://fakeimg.pl/779x519?text=Add+an+image!", // placeholder image
        // };
        

        // create a new recipe document in database. when testing locally, remove backend_url
        // await fetch(`${backend_url}/create`, {
        await fetch(`${backend_url}/create`, {

        method: "POST",
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        body: formData
        //   body: JSON.stringify(newRecipe),
        })
            .then((response) => {console.log(response)})
        //   .then((response) => response.json())
        //   .then((res) => console.log(res))
        .catch((error) => {
            console.log(error);
        });

        // redirect after function is executed
        navigate("/");
    };

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        isAuthenticated ? (
        <div className="create-container">
        <div className="create-recipe-card">
            <form className="recipe-form" onSubmit={handleSubmit}>
                <h3>Share your very own recipe with the world!</h3>
                <label>Upload An Image Of Your Recipe</label>
                <input 
                    onChange={(event) => {
                    setImage(event.target.files[0])
                    }} 
                    type="file"
                    id="file-input"
                    name="ImageStyle"
                    required
                ></input>
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
                    setIngredients(() => {
                        return event.target.value.split(",");
                    });
                    }}
                    rows="10"
                    placeholder="1 cup cooking wine, 300g minced pork, 400g tofu..."
                    required
                ></textarea>
                <label>Instructions: </label>
                <textarea
                    onChange={(event) => {
                    setInstructions(() => {
                        return event.target.value.split(",");
                    });
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
        </div>)
        : <Navigate to="/" />
    );
};

export default Create;
