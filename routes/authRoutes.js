const express = require("express");
const router = express.Router();
const {registerUser, loginUser , getProfile } = require("../controllers/authController");
const authMiddleWare = require("../middleware/authMiddleware");
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/profile",authMiddleWare,getProfile);

module.exports = router;
