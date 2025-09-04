import React from "react";
import { motion } from "framer-motion";
import AddToCartButton from "./AddToCartButton";

const Cards = ({ product }) => {
  const { name, image, price, review, rating, description } = product;

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="flex flex-col border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* 📸 Image Section with fixed ratio */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* 📝 Content */}
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        <div className="mt-3">
          <p className="text-lg font-bold text-green-600">₹{price}</p>

          {/* ⭐ Rating */}
          <div className="flex items-center text-yellow-500 mt-1 text-sm">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
            <span className="text-gray-500 text-xs ml-2">({review})</span>
          </div>
        </div>

        {/* 🛒 Button at Bottom */}
        <div className="mt-4">
          <AddToCartButton
            product={{
              ...product,
              _id: product._id?.$oid || product._id?.toString?.() || product._id,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
