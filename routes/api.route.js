const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const { LoginUser, UserSignup } = require("../controllers/Auth");

router.post("/auth/login", LoginUser);
router.post("/auth/signup", UserSignup);

module.exports = router
