import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from "../context/CartContext";
import axios from '../axios';
import AddToCartButton from './AddToCartButton';

const Cards = ({ product }) => {
  const { name, image, price, review, rating, description } = product;
  const { addToCart } = useCart();

  const submitHandler = async () => {
    try {
      await axios.post(
        '/api/cart/add',
        {
          productId: product._id,
          quantity: 1,
        },
        { withCredentials: true }
      );
      alert(`${product.name} added to cart!`);
    } catch (err) {
      console.error(err);
      alert("Error adding to cart");
    }
  };

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="flex flex-col justify-between border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-2xl transition duration-500 h-full"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-md"
      />

      <div className="flex flex-col justify-between flex-1 mt-2">
        <h2 className="text-base md:text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-900 mt-1 line-clamp-3">{description}</p>

        <div className="mt-3">
          <p className="font-bold text-green-600 text-sm md:text-base">
            ₹{price}
          </p>

          <div className="text-yellow-500 text-sm">
            {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
            <span className="text-yellow-600 text-xs ml-1">({review})</span>
          </div>

          <div className="mt-4">
            <AddToCartButton productId={product._id?.$oid || product._id?.toString?.() || product._id} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
