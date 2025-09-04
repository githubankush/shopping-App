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
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
        🎉 My Profile
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
      <div className="max-w-6xl mx-auto backdrop-blur-lg bg-white/10 border border-indigo-400/30 rounded-2xl shadow-2xl p-10 text-white">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-green-300 drop-shadow-md">
          <FaBox /> Order History
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-300 flex items-center gap-3 text-lg">
            <FaShoppingBag className="text-pink-400" /> No orders yet! Start shopping 🎁
          </p>
        ) : (
          <ul className="space-y-10">
            {orders.map((order) => (
              <li
                key={order._id}
                className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 shadow-lg p-8 hover:shadow-pink-500/40 hover:border-pink-400/40 transition"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div>
                    <p className="text-xs text-gray-400">Order ID</p>
                    <p className="font-bold tracking-wide text-pink-300">
                      #{order._id}
                    </p>
                  </div>
                  <p className="text-sm text-gray-300 mt-3 sm:mt-0">
                    Placed on{" "}
                    <span className="font-medium text-cyan-300">
                      {moment(order.createdAt).format("MMM Do YYYY, h:mm A")}
                    </span>
                  </p>
                </div>

                {/* Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-base">
                  <p>
                    <span className="font-semibold text-purple-300">
                      📦 Status:
                    </span>{" "}
                    <span
                      className={`font-bold ${
                        order.status === "Processing"
                          ? "text-yellow-400"
                          : order.status === "Shipped"
                          ? "text-blue-400"
                          : order.status === "Delivered"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>

                  <p>
                    <span className="font-semibold text-purple-300">
                      💳 Payment:
                    </span>{" "}
                    {order.paymentStatus === "Paid" ? (
                      <FaCheck className="inline text-green-400 ml-1" />
                    ) : (
                      <FaTimes className="inline text-red-400 ml-1" />
                    )}{" "}
                    ({order.paymentStatus})
                  </p>

                  <p>
                    <span className="font-semibold text-purple-300">
                      🆔 Payment ID:
                    </span>{" "}
                    {order.razorpayPaymentId || "N/A"}
                  </p>
                </div>

                {/* Items */}
                <div className="space-y-5">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-6 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-pink-400/30 transition"
                    >
                      <img
                        className="w-20 h-20 rounded-lg object-cover shadow-md"
                        src={`${item.productId?.image}`}
                        alt="Product"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-lg text-white">
                          {item.productId?.name || "Product"}
                        </p>
                        <p className="text-sm text-gray-300">
                          Qty: {item.quantity} × ₹{item.productId?.price || 0}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="text-right mt-6">
                  <span className="inline-flex items-center gap-2 text-2xl font-bold text-pink-300 drop-shadow-md">
                    <FaRupeeSign /> {order.totalAmount}
                  </span>
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
