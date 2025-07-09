const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { checkout } = require("../controllers/orderController"); // or wherever your logic is

router.post("/", authMiddleware, checkout); // 🔥 handles POST /api/checkout

module.exports = router;
