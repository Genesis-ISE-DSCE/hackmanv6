const express = require("express");
const router = express.Router();


const { signUp, login, logout } = require("../controllers/Admin")

router.route("/signup").post(signUp)
router.route("/login").post(login)
router.route("/logout").get(logout)



module.exports = router;