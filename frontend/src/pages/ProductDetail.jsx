import React from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../data/allProducts';
import { motion } from 'framer-motion';
import AddToCartButton from '../components/AddToCartButton';

const ProductDetail = () => {
  const { id } = useParams();

  // Normalize products to ensure valid _id strings
  const products = allProducts.map(product => ({
    ...product,
    _id: product._id?.$oid || product._id?.toString?.() || product._id,
    id: product._id?.$oid || product._id?.toString?.() || product._id
  }));

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="p-6 text-center text-red-500 font-semibold">Product not found</div>;
  }

  const { name, image, price, review, rating, description } = product;

  return (
    <motion.div
      key={product._id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />

      <div className="text-black space-y-2">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-800">{description}</p>

        <div className="text-lg font-bold text-green-600">₹{price}</div>

        <div className="text-yellow-500">
          {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
          <span className="text-yellow-600 text-sm ml-2">({review})</span>
        </div>

        <div className="mt-4 w-full sm:w-1/2 md:w-1/3">
          {/* ✅ Passing cleaned _id and full product */}
          <AddToCartButton product={{ ...product, _id: product._id }} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
