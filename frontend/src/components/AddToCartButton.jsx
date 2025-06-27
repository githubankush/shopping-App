import React from 'react';
import axios from '../axios';
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const AddToCartButton = ({ product }) => {
  const { fetchCart } = useCart();
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

      // alert(`${product.name} added to cart!`);
      toast.success(`${product.name} added to cart!`);
      await fetchCart(); // ✅ Update global cart
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data || err.message);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-purple-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
