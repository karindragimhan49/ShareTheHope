const express = require("express");
const { registerUser, authUser, logoutUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

module.exports = router; // Ensure router is exported correctly
