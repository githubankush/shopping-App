// pages/Cart.jsx
import React, { useEffect, useState } from "react";
import axios from "../axios";
const Cart = () => {
  const [cart, setCart] = useState(null);
  
  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get("/api/cart", { withCredentials: true });
      console.log("Fetched cart data:", res.data);
      setCart(res.data);
    };
    fetchCart();
  }, []);

  if (!cart) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl text-black font-bold mb-4">Your Cart</h2>
      {cart.items?.map((item) => (
        <div className="border-2 border-black p-4 mb-4" key={item._id || item.productId?._id}>
          <h3 className="text-lg text-black font-bold mb-2">{item.productId?.name || "Unknown Product"}</h3>
          <p className="text-gray-700 mb-2">Price: ₹{item.productId?.price ?? "N/A"}</p>
          <p className="text-gray-700 mb-2">Quantity: {item.quantity}</p>
          <img className="object-cover mb-2"
            src={item.productId?.image || "/placeholder.jpg"}
            alt={item.productId?.name || "Product"}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
