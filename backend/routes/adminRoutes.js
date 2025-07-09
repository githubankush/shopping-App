const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  deleteUser,
  getAllOrders,
  updateOrderStatus,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const isAdmin  = require("../middleware/adminMiddleware");

// USER
router.get("/users", authMiddleware, isAdmin, getAllUsers);
router.delete("/user/:id", authMiddleware, isAdmin, deleteUser);
router.get("/test", authMiddleware, isAdmin, (req, res) => {
  console.log("✅ /api/admin/test hit");
  res.send("Admin route is working");
});
// ORDER
router.get("/orders", authMiddleware, isAdmin, getAllOrders);
router.put("/order/:id/status", authMiddleware, isAdmin, updateOrderStatus);

// PRODUCT
router.get("/products", authMiddleware, isAdmin, getAllProducts);
router.post("/product", authMiddleware, isAdmin, createProduct);
router.put("/product/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/product/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
