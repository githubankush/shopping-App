import React from "react";
import { motion } from "framer-motion";
import AddToCartButton from "./AddToCartButton";
import { FaRupeeSign, FaStar } from "react-icons/fa";

const Cards = ({ product }) => {
  const { name, image, price, review, rating, description } = product;

  return (
    <motion.div
      key={product._id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="flex flex-col backdrop-blur-lg bg-white/10 border border-purple-400/30 
                 rounded-2xl shadow-lg hover:shadow-pink-500/30 
                 transition duration-300 overflow-hidden group"
    >
      {/* 📸 Product Image */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-900/30 to-indigo-900/30 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* 📝 Content */}
      <div className="flex flex-col flex-1 p-5 text-white">
        {/* Name */}
        <h2 className="text-lg md:text-xl font-bold truncate bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
          {name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-2 line-clamp-2">{description}</p>

        {/* Price + Rating */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold flex items-center gap-1 text-green-400">
            <FaRupeeSign className="text-base" /> {price}
          </p>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-500"}
              />
            ))}
            <span className="text-gray-400 text-xs ml-1">({review})</span>
          </div>
        </div>

        {/* 🛒 Add to Cart Button */}
        <div className="mt-5">
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
