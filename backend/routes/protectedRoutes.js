const express = require("express");
const { registerUser, authUser, logoutUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/auth", authUser); // Ensure this route exists
router.post("/logout", logoutUser);

module.exports = router;
