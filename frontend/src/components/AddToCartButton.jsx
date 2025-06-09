import React from "react";
import axios from "../axios";

const AddToCartButton = ({ productId }) => {

  const handleAdd = async () => {
    console.log("🚀 Sending to /api/cart/add:", {
      productId, // This should be a string now
      quantity: 1
    });
  console.log("🚀 Sending productId:", typeof productId, productId);
    try {
     const res =  await axios.post(
        "/api/cart/add",
        { productId, quantity: 1 },
        { withCredentials: true }
      );
      console.log("🚀 Response from /api/cart/add:", res.data);
      console.log("🚀 Response status:", res.status);
      console.log("🚀 productId:", productId);
      // Assuming the response contains the updated cart or confirmation
      console.log("✅ Successfully added to cart:", res.data);
      alert("Added to cart!");
    } catch (err) {
      console.error("❌ Error adding to cart:", err);
      alert(
        "Error adding to cart: " +
          (err.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <button
      onClick={handleAdd}
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 w-full"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
