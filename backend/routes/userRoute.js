const express = require('express');
const {register, login, profile, logout}  = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile',authMiddleware ,profile)
router.get('/logout', logout)

module.exports = router;