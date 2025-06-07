// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: '', // store image URL or path
  },
  category: {
    type: String,
    default: ''
  },
  stock: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);

// This code defines a Mongoose schema for a Product model in a Node.js application.
// The schema includes fields for product name, description, price, image, category, stock quantity, and creation date.