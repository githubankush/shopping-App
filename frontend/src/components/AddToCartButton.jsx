import React from 'react';
import axios from '../axios';

const AddToCartButton = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      const cleanedProduct = {
        ...product,
        _id: product._id?.$oid || product._id?.toString?.() || product._id
      };

      const response = await axios.post(
        '/api/cart/add',
        {
          product: cleanedProduct,
          quantity: 1
        },
        { withCredentials: true }
      );

      alert(`${product.name} added to cart!`);
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data || err.message);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-lg text-sm"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
