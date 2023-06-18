const mongoose = require("mongoose");

//Allowed types:
// String
// Number
// Date
// Boolean
// Buffer
// ObjectId
// Mixed
// Array

const RecipesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
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
  difficulty: {
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
});

const Recipes = mongoose.model("Recipes", RecipesSchema)

module.exports = Recipes;

