const express = require('express');
const {  getUserOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/user', authMiddleware, getUserOrders);
router.get("/test", (req, res) => {
  console.log("✅ /api/order/test hit");
  res.send("Order route is working");
});

module.exports = router;