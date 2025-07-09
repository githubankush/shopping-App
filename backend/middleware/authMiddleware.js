const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  // console.log("🔐 Incoming request to protected route, token:", token);

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = { id: decoded.id }; // ✅ Only user ID
    // Fetch full user to get role
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user; // full user object including role

    // console.log("✅ Authenticated user ID:", req.user.id); // ✅ FIXED LOG
    next();
  } catch (err) {
    // console.log("❌ Invalid token");
    res.status(401).json({ message: 'Token invalid' });
  }
};

module.exports = authMiddleware;
