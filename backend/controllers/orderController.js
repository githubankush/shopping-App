const Cart = require("../models/cart");
const Order = require("../models/order");
exports.checkout = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    const order = new Order({
      userId,
      items: cart.items.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity
      })),
      totalAmount
    });

    await order.save();

    // Optional: clear cart
    // cart.items = [];
    await cart.save();

    res.status(201).json({ message: 'Order placed', order });
  } catch (err) {
    console.error("Checkout error:", err);
    res.status(500).json({ message: 'Checkout failed', error: err.message });
  }
};
