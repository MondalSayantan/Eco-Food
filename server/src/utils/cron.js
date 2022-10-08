const { Ingredient } = require("../models");

const cronJob = async () => {
  const ingredients = await Ingredient.find({
    expiryDate: {
      $lte: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
  });
  console.log(ingredients);
};

module.exports = cronJob;
