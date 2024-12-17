const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const { LoginUser, UserSignup } = require("../controllers/Auth");
const { GetAllProducts } = require("../controllers/GetProducts");
const { GetProfile } = require("../controllers/getUser");

router.post("/auth/login", LoginUser);
router.post("/auth/signup", UserSignup);
// router.post("/create/product" , )
router.get("/owner/allproducts" , GetAllProducts)
router.get("/user/profile/:email" , GetProfile)

module.exports = router
