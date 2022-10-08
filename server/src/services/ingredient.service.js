const { Ingredient } = require("../models");

const getIngredients = async () => {
  const ingredients = await Ingredient.find({}).sort({ expiryDate: 1 });
  return ingredients;
};

const createIngredient = async (ingredientBody) => {
  const ingredient = await Ingredient.create(ingredientBody);
  return ingredient;
};

const expireIngredients = async () => {
  const ingredients = await Ingredient.find({
    expiryDate: {
      $lte: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    },
  });
  return ingredients;
};

module.exports = {
  createIngredient,
  getIngredients,
  expireIngredients,
};
