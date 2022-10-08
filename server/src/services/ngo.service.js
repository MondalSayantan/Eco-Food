const { Ngo } = require("../models");

const addNgo = async (ngoBody) => {
  const ngo = await Ngo.create(ngoBody);
  return ngo;
};

const getNgos = async () => {
  // return ngos without message field
  const ngos = await Ngo.find({}, { message: 0 });
  return ngos;
};

module.exports = {
  addNgo,
  getNgos,
};
