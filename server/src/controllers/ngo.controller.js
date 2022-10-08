const httpStatus = require("http-status");
const { ngoService } = require("../services");

const addNgo = async (req, res, next) => {
  try {
    const ngo = await ngoService.addNgo(req.body);
    res.status(httpStatus.CREATED).send(ngo);
  } catch (error) {
    next(error);
  }
};

const getNgos = async (req, res, next) => {
  try {
    const ngos = await ngoService.getNgos();
    res.send(ngos);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addNgo,
  getNgos,
};
