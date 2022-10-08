const express = require("express");
const ingredientRoute = require("./ingredient.route");
const emailRoute = require("./email.route");

const router = express.Router();

router.use("/ingredient", ingredientRoute);
router.use("/email", emailRoute);

module.exports = router;
