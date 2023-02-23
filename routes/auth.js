const express = require("express");
const router = express.Router();
//import controllers:
const { signUp, login } = require("../controllers/auth");
//import middlewares:
const checkUser = require("../middlewares/checkUser");
const checkLogin = require("../middlewares/checkLogin");

router.route("/auth/signup").post(checkUser, signUp);

router.route("/auth/login").post(checkLogin, login);

module.exports = router;