const httpStatus = require("http-status");
const { ingredientService } = require("../services");

const createIngredient = async (req, res, next) => {
  try {
    const ingredient = await ingredientService.createIngredient(req.body);
    res.status(httpStatus.CREATED).send(ingredient);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createIngredient,
};
