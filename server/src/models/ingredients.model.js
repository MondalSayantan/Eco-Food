const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  shelfLife: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientsSchema);
module.exports = { Ingredient };
