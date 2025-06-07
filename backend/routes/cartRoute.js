const express = require('express');
const { addToCart, getCart, removeFromCart, getCartByUserId } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.get('/:userId', getCartByUserId);
router.delete('/:productId', authMiddleware, removeFromCart);

module.exports = router;
