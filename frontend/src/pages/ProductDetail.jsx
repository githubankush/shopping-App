import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AddToCartButton from '../components/AddToCartButton';
import axios from '../axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/product/${id}`); // Adjust the URL if needed
        setProduct(res.data);
      } catch (err) {
        console.error('❌ Error fetching product:', err);
        setError(err.response?.data?.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-6">{error}</div>;
  if (!product) return <div className="text-center text-red-500 p-6">Product not found</div>;

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
          {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
          <span className="text-yellow-600 text-sm ml-2">({review})</span>
        </div>

        <div className="mt-4 w-full sm:w-1/2 md:w-1/3">
          <AddToCartButton product={product} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
