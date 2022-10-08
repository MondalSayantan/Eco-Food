const { Ingredient } = require("../models");
const { sendEmail } = require("./sendEmail");

const cronJob = async () => {
  const ingredients = await Ingredient.find({
    expiryDate: {
      $lte: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
  });
  if (ingredients.length > 0) {
    sendEmail(ingredients);
  }
};

module.exports = cronJob;
