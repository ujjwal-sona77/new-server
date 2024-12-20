const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const { LoginUser, UserSignup } = require("../controllers/Auth");
const { GetAllProducts } = require("../controllers/GetProducts");
const { GetProfile } = require("../controllers/getUser");
const { CreateProduct } = require("../controllers/CreateProduct");
const {
  RemoveProductFromCart,
  DecreaseQuantityOfProduct,
  IncreaseProductQuantity,
} = require("../controllers/CartControl");
const { AddToCart } = require("../controllers/AddToCart");

router.post("/auth/login", LoginUser);
router.post("/auth/signup", UserSignup);
router.post("/create/product", CreateProduct);
router.get("/owner/allproducts", GetAllProducts);
router.get("/user/profile/:email", GetProfile);
router.post("/cart/increase/:productid/:email", IncreaseProductQuantity);

router.post("/cart/decrease/:productid/:email", DecreaseQuantityOfProduct);

router.post("/cart/remove/:productid/:email", RemoveProductFromCart);
router.post("/cart/add/:productId/:user", AddToCart);

module.exports = router;
