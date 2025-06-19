const razorpay = require('../config/razorpay');

exports.createRazorpayOrder = async (req, res) => {
  const { amount } = req.body; // amount in INR

  const options = {
    amount: amount * 100, // convert to paise
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order); // send order id etc. to frontend
  } catch (error) {
    res.status(500).json({ message: "Payment order creation failed", error: error.message });
  }
};
