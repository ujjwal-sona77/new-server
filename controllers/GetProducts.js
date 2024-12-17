const productModel = require("../models/product.model");
const userModel = require("../models/user.model");

module.exports.GetAllProducts = async (req, res) => {
  const products = await productModel.find();
  res.status(200).send({ products, success: true });
};
