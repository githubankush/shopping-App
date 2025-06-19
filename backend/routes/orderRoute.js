const express = require('express');
const { checkout, getUserOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/checkout', authMiddleware, checkout);
router.get('/user', authMiddleware, getUserOrders);

module.exports = router;