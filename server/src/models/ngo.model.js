// name, email, mobile, address, mssg
const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  message: {
    type: String,
    // required: true,
  },
});

const Ngo = mongoose.model("Ngo", ngoSchema);
module.exports = { Ngo };
