const express = require("express");
const RecipesModel = require("../models/RecipesSchema");

router = express.Router();

// create a new recipe
router.post("/create", async (req, res) => {
  const recipe = new RecipesModel(req.body);

  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
});

// // get all recipes
// router.get("/", async (req, res) => {
//   const recipes = await RecipesModel.find({});

//   try {
//     res.send(recipes);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// get all recipes
router.get("/browse", async (req, res) => {
  const allRecipes = await RecipesModel.find({});

  try {
    res.send(allRecipes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get recipe by id
router.get("/browse/recipes/:id", async (req, res) => {
  const getRecipeById = await RecipesModel.findById(req.params.id)
  try {
    res.send(getRecipeById);
  } catch (err) {
    res.status(500).send(err);
  }
})

// get the top 5 tastest recipes
router.get("/", async(req, res) => {
  const tastiestFive = await RecipesModel.find({}).sort({taste: -1}).limit(5)
  try {
    res.send(tastiestFive)
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;
