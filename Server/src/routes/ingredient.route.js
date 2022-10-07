const express = require("express");
const ingredientController = require("../controllers/ingredient.controller");

const router = express.Router();

router.post("/", ingredientController.createIngredient);

module.exports = router;
