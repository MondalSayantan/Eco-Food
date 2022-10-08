const express = require("express");
const ingredientRoute = require("./ingredient.route");
const emailRoute = require("./email.route");
const ngoRoute = require("./ngo.route");

const router = express.Router();

router.use("/ingredient", ingredientRoute);
router.use("/email", emailRoute);
router.use("/ngo", ngoRoute);

module.exports = router;
