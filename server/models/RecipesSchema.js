import mongoose from "mongoose"
// const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        required: true,
    },
    userId: {
        type:String,
        requireD: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: true,
    }, 
    ingredients: {
        type: Array,
        required: true,
    },
    instructions: {
        type: Array,
        required: true,
    },
    totalTime: {
        type: Number,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    authenticity: {
        type: Number,
        required: false,
    },
    taste: {
        type: Number,
        required: false,
    },
    complexity: {
        type: Number,
        required: false,
    },
    author: {
        type: String,
        required: false,
    },
    tags: {
        type: Array,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false
  }
});

const RecipesModel = mongoose.model("Recipes", RecipesSchema);

export default RecipesModel;