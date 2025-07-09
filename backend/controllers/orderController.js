const Order = require("../models/order");
const Cart = require("../models/cart");
const crypto = require("crypto");
const mongoose = require("mongoose");

exports.checkout = async (req, res) => {
  try {
    console.log("▶️ CHECKOUT initiated");

    // Check user ID
    const userId = req.user?._id;
    if (!userId) {
      console.error("❌ No user ID in request");
      return res.status(401).json({ message: "Unauthorized: No user ID" });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);

    const cart = await Cart.findOne({ userId: userObjectId }).populate("items.productId");
    if (!cart || cart.items.length === 0) {
      console.error("❌ Cart empty or not found");
      return res.status(400).json({ message: "Cart is empty" });
    }

    const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
    if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      console.error("❌ Razorpay payment details missing");
      return res.status(400).json({ message: "Incomplete Razorpay details" });
    }

    // Optional: Razorpay Signature Verification
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    hmac.update(razorpayOrderId + "|" + razorpayPaymentId);
    const digest = hmac.digest("hex");

    if (digest !== razorpaySignature) {
      console.error("❌ Invalid Razorpay signature");
      return res.status(400).json({ message: "Invalid signature" });
    }

    const totalAmount = cart.items.reduce((sum, item) => {
      if (!item.productId || typeof item.productId.price !== "number") {
        throw new Error("Invalid product or price in cart item");
      }
      return sum + item.productId.price * item.quantity;
    }, 0);

    const order = await Order.create({
      userId: userObjectId,
      items: cart.items.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      totalAmount,
      paymentStatus: "Paid",
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      status: "Processing",
    });

    // Clear cart
    cart.items = [];
    await cart.save();

    console.log("✅ Order created:", order._id);
    res.status(201).json({ message: "Order placed successfully", order });

  } catch (err) {
    console.error("❌ Server error in checkout:", err.message);
    res.status(500).json({ message: "Checkout failed", error: err.message });
  }
};



exports.getUserOrders = async (req, res) => {
  try {
      console.log("🛒 Fetching orders for user:", req.user); 
    const userId = new mongoose.Types.ObjectId(req.user._id);

    const orders = await Order.find({ userId }).populate("items.productId");

    console.log("📦 Orders found:", orders.length);
    res.status(200).json(orders);
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};


