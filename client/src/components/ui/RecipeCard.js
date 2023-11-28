import React from "react";
import { Link } from "react-router-dom";
import { backend_url } from "../../config";
import "./RecipeCard.css"
import { Rating } from '@mui/material';

export const RecipeCard = ({ search, filteredResult, allRecipes }) => {
    // capitalizes country names
    const capitalize = (str) => {
        const words = str.trim().split(" ");
        for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
    };
    
    if (search) {
        if (filteredResult.length === 0) {
            return(
                <p className="no-results">
                    There aren't any recipes from that country... yet.
                    <br></br>Be the first one to add a recipe!
                </p>
            )
        } else {
            return(
                filteredResult.map((recipe) => (
                    <div className="recipe-card-container">
                        <Link
                        className="card"
                        style={{ textDecoration: "none" }}
                        to={`/browse/recipes/${recipe._id}`}
                        >
                        <div className="browse-card">
                            <div className="browse-card__image">
                            <img src={recipe.imageUrl} alt={recipe.title} loading="lazy"></img>
                            </div>
                            <div className="browse-card__text">
                            <h3 className="browse-card__title">{recipe.title}</h3>
                            <p id="browse-card__country">{capitalize(recipe.country)}</p>
                            <div className="browse-card__details">
                                <Rating
                                    name="card-rating"
                                    value={recipe.taste}
                                    precision={0.5}
                                    readOnly={true}
                                    size={"small"}
                                />   
                                {/* <p>Tastiness: {recipe.taste}</p>
                                <p>Authenticity: {recipe.authenticity}</p>
                                <p>Complexity: {recipe.complexity}</p> */}
                            </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
            )
        }
    }
    
    if (allRecipes) {
        if (allRecipes.length === 0) {
            return(
                <p className="no-results">
                    There aren't any recipes... yet.
                    <br></br>Be the first one to add a recipe!
                </p>
            )
        }

        return (
            allRecipes.map((recipe) => (
                <div className="recipe-card-container">
                    <Link
                        className="card"
                        style={{ textDecoration: "none" }}
                        to={`/browse/recipes/${recipe._id}`}
                    >
                        <div className="browse-card">
                        <div className="browse-card__image">
                            <img src={recipe.imageUrl} alt={recipe.title} loading="lazy"></img>
                        </div>
                        <div className="browse-card__text">
                            <h3 className="browse-card__title">{recipe.title}</h3>
                            <p id="browse-card__country">{capitalize(recipe.country)}</p>
                            <div className="browse-card__details">
                                <Rating
                                    name="card-rating"
                                    value={recipe.taste}
                                    precision={0.5}
                                    readOnly={true}
                                    size={"small"}
                                />   
                                {/* <p>Tastiness: {recipe.taste}</p>
                                <p>Authenticity: {recipe.authenticity}</p>
                                <p>Complexity: {recipe.complexity}</p> */}
                            </div>
                        </div>
                        </div>
                    </Link>
                </div>
            ))  
        )
    }

    return (
        <p>Loading...</p>
        
    );
};
