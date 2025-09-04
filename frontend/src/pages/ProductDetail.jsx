import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AddToCartButton from "../components/AddToCartButton";
import axios from "../axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/product/${id}`, {
          metadata: { showLoading: true },
        });
        setProduct(res.data);
      } catch (err) {
        console.error("❌ Error fetching product:", err);
        setError(err.response?.data?.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-6">{error}</div>;
  if (!product)
    return <div className="text-center text-red-500 p-6">Product not found</div>;

  const { name, image, price, review, rating, description } = product;

  return (
    <motion.div
      key={product._id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="max-w-6xl mx-auto p-6 mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6">
        {/* ✅ Responsive Image Container */}
        <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* ✅ Product Info */}
        <div className="flex flex-col justify-between space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{description}</p>

            <div className="mt-4">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 text-transparent bg-clip-text">
                ₹{price}
              </span>
            </div>

            {/* Rating + Reviews */}
            <div className="flex items-center mt-3">
              <div className="text-yellow-400 text-lg">
                {"★".repeat(Math.floor(rating))}
                {"☆".repeat(5 - Math.floor(rating))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {review} reviews
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="w-full sm:w-1/2">
            <AddToCartButton
              product={{
                ...product,
                _id:
                  product._id?.$oid || product._id?.toString?.() || product._id,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
