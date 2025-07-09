const razorpay = require('../config/razorpay');

exports.createRazorpayOrder = async (req, res) => {
  const { amount } = req.body;

  console.log("💰 Creating Razorpay Order. Amount:", amount);
  console.log("🔑 User ID:", req.user?._id);

  const options = {
    amount: amount * 100, // convert to paise
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error("❌ Razorpay error:", error);
    res.status(500).json({ message: "Payment order creation failed", error: error.message });
  }
};
