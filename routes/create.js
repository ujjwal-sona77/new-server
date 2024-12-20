const express = require("express");
const { CreateProduct } = require("../controllers/CreateProduct");
const router = express.Router();

router.post("/product" , CreateProduct);


module.exports = router;
