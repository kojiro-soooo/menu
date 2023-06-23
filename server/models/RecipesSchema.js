const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({
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
  imageURL: {
    type: String,
    required: false
  }
});

const Recipes = mongoose.model("Recipes", RecipesSchema)

module.exports = Recipes;

//Allowed types in mongoDB:
// String
// Number
// Date
// Boolean
// Buffer
// ObjectId
// Mixed
// Array