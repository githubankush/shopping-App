const Cart = require('../models/cart');
const Product = require('../models/product');
const mongoose = require('mongoose');
const isValidObjectId = mongoose.Types.ObjectId.isValid;

exports.addToCart = async (req, res) => {
  console.log(mongoose.models);
  const userId = req.user.id;
  let { productId, quantity = 1 } = req.body;
  console.log("AddToCart Request:", { userId, productId, quantity });
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  if (!isValidObjectId(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  // Ensure proper ObjectId casting
  // productId = new mongoose.Types.ObjectId(productId);
  try {
    let cart = await Cart.findOne({ userId });
    console.log("Existing Cart:", cart);
    if (cart) {
      console.log("Cart found for user:", userId);
    } else {
      console.log("No cart found for user, creating a new one.");
    }

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId.toString());
      console.log("Item Index:", itemIndex);

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

      await cart.save(); // Make sure cart changes are saved before populating

    const productExists = await Product.findById(productId);
    console.log("Does Product Exist:", productExists);

    // const populatedCart = await Cart.findOne({ _id: cart._id }).populate('items.productId');
    const populatedCart = await Cart.findOne({ _id: cart._id }).populate({
                        path: 'items.productId',
                        model: 'Product'
                      });

    console.log("Populated Cart:", populatedCart);


    
    res.status(200).json(populatedCart);
  } catch (err) {
    console.error("AddToCart Error:", err);
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};


exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id}).populate('items.productId');
    
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error removing item", error: err.message });
  }
};
