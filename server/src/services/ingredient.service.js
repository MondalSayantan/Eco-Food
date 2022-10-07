const { Ingredient } = require("../models");

const createIngredient = async (ingredientBody) => {
  const ingredient = await Ingredient.create(ingredientBody);
  return ingredient;
};

module.exports = {
  createIngredient,
};
