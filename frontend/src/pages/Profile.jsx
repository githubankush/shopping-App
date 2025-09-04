import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Logout from "./Logout";
import axios from "../axios";
import moment from "moment";
import {
  FaUser,
  FaBox,
  FaRupeeSign,
  FaCheck,
  FaTimes,
  FaShoppingBag,
} from "react-icons/fa";

const Profile = () => {
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/order/user", {
          withCredentials: true,
          metadata: { showLoading: true },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err.response?.data || err.message);
      }
    };

    if (user) fetchOrders();
  }, [user]);

  if (loading) {
    return (
      <h1 className="flex items-center justify-center h-screen text-white text-2xl font-semibold">
        Loading...
      </h1>
    );
  }

  if (!user) {
    return (
      <h1 className="flex items-center justify-center h-screen text-white text-2xl font-semibold">
        Please login to view your profile
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-6 text-white">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
      My Profile
      </h1>

      {/* Profile Info */}
      <div className="max-w-3xl mx-auto mb-16 backdrop-blur-lg bg-white/10 border border-purple-400/30 rounded-2xl shadow-2xl p-8 text-white hover:scale-[1.01] transition">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-pink-300 drop-shadow-md">
          <FaUser /> Profile Details
        </h2>
        <div className="space-y-3 text-lg">
          <p>
            <span className="font-semibold text-cyan-300">👤 Name:</span>{" "}
            {user.name}
          </p>
          <p>
            <span className="font-semibold text-cyan-300">📧 Email:</span>{" "}
            {user.email}
          </p>
        </div>
        <div className="mt-6">
          <Logout />
        </div>
      </div>

      {/* Orders */}
      {/* Orders */}
<div className="max-w-6xl mx-auto backdrop-blur-lg bg-white/10 border border-indigo-400/30 rounded-2xl shadow-2xl p-10 text-white">
  <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-green-300 drop-shadow-md">
    <FaBox /> Order History
  </h2>

  {orders.length === 0 ? (
    <p className="text-gray-300 flex items-center gap-3 text-lg">
      <FaShoppingBag className="text-pink-400" /> No orders yet! Start shopping 🎁
    </p>
  ) : (
    <ul className="space-y-12">
      {orders.map((order) => (
        <li
          key={order._id}
          className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 shadow-lg hover:shadow-pink-500/40 transition"
        >
          {/* Order Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-t-2xl flex justify-between items-center">
            <p className="text-sm text-gray-200">
              {moment(order.createdAt).format("MMM Do YYYY, h:mm A")}
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Items */}
            <div className="grid sm:grid-cols-2 gap-6">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:border-pink-400/30 transition"
                >
                  <img
                    src={item.productId?.image}
                    alt={item.productId?.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-lg">
                      {item.productId?.name}
                    </p>
                    <p className="text-sm text-gray-300">
                      Qty: {item.quantity} × ₹{item.productId?.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status & Payment */}
            <div className="flex flex-wrap gap-6 text-sm">
              <span
                className={`px-3 py-1 rounded-full font-medium ${
                  order.status === "Processing"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : order.status === "Shipped"
                    ? "bg-blue-500/20 text-blue-400"
                    : order.status === "Delivered"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {order.status}
              </span>

              <span
                className={`px-3 py-1 rounded-full font-medium ${
                  order.paymentStatus === "Paid"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {order.paymentStatus}
              </span>

              <span className="text-gray-400">
                Payment ID: {order.razorpayPaymentId || "N/A"}
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6">
              <span className="inline-flex items-center gap-2 text-2xl font-bold text-pink-300">
                <FaRupeeSign /> {order.totalAmount}
              </span>
              
            </div>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>

      
    </div>
  );
};

export default Profile;
