const express = require('express');
const { checkout } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/checkout', authMiddleware, checkout);

module.exports = router;