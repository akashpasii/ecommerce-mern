const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getData,
} = require("../controllers/authController");
const { authenticateToken } = require("../middleware/authenticateToken");
const admin = require("../middleware/adminMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", authenticateToken, admin, getData);
// router.post("/logout", logoutUser);

module.exports = router;
