const httpStatus = require("http-status");
const { ingredientService } = require("../services");

const getIngredients = async (req, res, next) => {
  try {
    const ingredients = await ingredientService.getIngredients();
    res.send(ingredients);
  } catch (error) {
    next(error);
  }
};

const createIngredient = async (req, res, next) => {
  try {
    const ingredient = await ingredientService.createIngredient(req.body);
    res.status(httpStatus.CREATED).send(ingredient);
  } catch (error) {
    next(error);
  }
};

const expireIngredients = async (req, res, next) => {
  try {
    const ingredients = await ingredientService.expireIngredients();
    res.send(ingredients);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createIngredient,
  getIngredients,
  expireIngredients,
};
