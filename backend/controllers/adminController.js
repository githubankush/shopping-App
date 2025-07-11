const User = require("../models/user");
const Order = require("../models/order");
const Product = require("../models/product");
const mongoose = require("mongoose");

// ✅ Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users", error: err.message });
  }
};

// ✅ Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
};

// ✅ Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.productId").populate("userId", "name email");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err.message });
  }
};

// ✅ Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;  // ✅ FIXED: use "id" not "orderId"
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ message: "Order status updated", order });
  } catch (err) {
    res.status(500).json({ message: "Failed to update order", error: err.message });
  }
};

// ✅ Delete an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const {id} = req.params;
    await Order.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete order", error: err.message });
  }
};

// ✅ Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};

// ✅ Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image, stock, category, rating, review } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      image,
      stock,
      category,
      rating,
      review,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product created", product: savedProduct });
  } catch (err) {
    res.status(500).json({ message: "Failed to create product", error: err.message });
  }
};

// ✅ Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product updated", product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: "Failed to update product", error: err.message });
  }
};

// ✅ Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete product", error: err.message });
  }
};
