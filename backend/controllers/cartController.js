const Cart = require('../models/cart');
const Product = require('../models/product');
const mongoose = require('mongoose');
const isValidObjectId = mongoose.Types.ObjectId.isValid;

exports.addToCart = async (req, res) => {
  const userId = req.user.id;
  let { product, quantity = 1 } = req.body;

  if (!product || !product._id) {
    return res.status(400).json({ message: "Product with valid _id is required" });
  }

  const productId = product._id;

  if (!isValidObjectId(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  quantity = Number(quantity);

  try {
    let productExists = await Product.findById(productId);
    if (!productExists) {
      productExists = new Product(product);
      await productExists.save();
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }]
      });
    } else {
      const itemIndex = cart.items.findIndex(
        item => item.productId.toString() === productId.toString()
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();

    await cart.populate({
      path: 'items.productId',
      model: 'Product'
    });

    return res.status(200).json(cart);
  } catch (err) {
    console.error("AddToCart Error:", err);
    return res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};


exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;
    const cart = await Cart.findOne({ userId }).populate('items.productId');


    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.productId && item.productId._id);


    res.status(200).json(cart);
  } catch (err) {
    console.error("Cart fetch error:", err);
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};



exports.removeFromCart = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  if (!productId || !isValidObjectId(productId)) {
    return res.status(400).json({ message: "Valid product ID is required" });
  }

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      item => item.productId.toString() !== productId.toString()
    );

    await cart.save();

    await cart.populate({ path: 'items.productId', model: 'Product' });

    return res.status(200).json(cart);
  } catch (err) {
    console.error("RemoveFromCart Error:", err);
    res.status(500).json({ message: "Error removing item", error: err.message });
  }
};

exports.updateQuantity = async (req, res) => {
  const userId = req.user.id;
  const { productId, type } = req.body;

  if (!productId || !isValidObjectId(productId) || !['inc', 'dec'].includes(type)) {
    return res.status(400).json({ message: "Invalid input" });
  }

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(item => item.productId.toString() === productId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.quantity = type === 'inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1);

    await cart.save();
    await cart.populate({ path: 'items.productId', model: 'Product' });

    res.status(200).json(cart);
  } catch (err) {
    console.error("Quantity update error:", err);
    res.status(500).json({ message: "Error updating quantity", error: err.message });
  }
};

