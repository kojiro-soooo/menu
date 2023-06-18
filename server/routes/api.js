const express = require("express");
const RecipesModel = require("../models/RecipesSchema")

router = express.Router();

router.post("/create", async (request, response) => {
  const recipe = new RecipesModel(request.body);

  try {
    await recipe.save();
    response.send(recipe);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/", async (request, response) => {
  const recipes = await RecipesModel.find({});

  try {
    response.send(recipes);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;