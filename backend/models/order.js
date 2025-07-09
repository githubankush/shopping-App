const mongoose = require('mongoose');
const { isNumber } = require('razorpay/dist/utils/razorpay-utils');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Processing' },
  paymentStatus: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  razorpayPaymentId: String,
  razorpayOrderId: String,
  razorpaySignature: String,

});

module.exports = mongoose.model('Order', orderSchema);
