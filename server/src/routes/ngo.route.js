const express = require("express");
const ngoController = require("../controllers/ngo.controller");

const router = express.Router();

router.post("/", ngoController.addNgo);
router.get("/", ngoController.getNgos);

module.exports = router;
