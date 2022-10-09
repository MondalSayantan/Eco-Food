const express = require("express");
const ingredientController = require("../controllers/ingredient.controller");

const router = express.Router();

router.post("/", ingredientController.createIngredient);
router.get("/", ingredientController.getIngredients);
router.get("/expire", ingredientController.expireIngredients);
router.post("/delete", ingredientController.deleteIngredient);

module.exports = router;
