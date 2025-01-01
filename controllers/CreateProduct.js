const productModel = require("../models/productModel");
const upload = require("../config/multer");
const userModel = require("../models/userModel");

(module.exports.CreateProduct = upload.single("image")),
  async (req, res) => {
    try {
      const { name, price, discount } = req.body;
      const image = req.file.buffer;
      const product = await productModel.create({
        name,
        price,
        discount,
        image,
      });
      res
        .status(200)
        .send({ message: "Product created successfully", success: true , product });
    } catch (error) {
      res.status(500).send({ message: error.message, success: false });
    }
  };
