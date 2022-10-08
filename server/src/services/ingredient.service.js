const { Ingredient } = require("../models");

const getIngredients = async () => {
  const ingredients = await Ingredient.find();
  return ingredients;
};

const createIngredient = async (ingredientBody) => {
  const ingredient = await Ingredient.create(ingredientBody);
  return ingredient;
};

module.exports = {
  createIngredient,
  getIngredients,
};
