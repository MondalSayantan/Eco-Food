const express = require("express");
const ingredientRoute = require("./ingredient.route");

const router = express.Router();

router.use("/ingredient", ingredientRoute);

module.exports = router;
