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
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black p-6 text-white">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-300 via-purple-400 to-pink-500 text-transparent bg-clip-text">
        My Profile
      </h1>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-white via-gray-100 to-white rounded-2xl shadow-xl p-8 text-gray-900 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-700">
          <FaUser /> Profile Information
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">👤 Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">📧 Email:</span> {user.email}
          </p>
        </div>
        <div className="mt-6">
          <Logout />
        </div>
      </div>

      {/* Order History */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl shadow-xl p-8 text-gray-900 border border-gray-200">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-purple-700">
          <FaBox /> Order History
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-600 flex items-center gap-2">
            <FaShoppingBag /> You haven&apos;t placed any orders yet.
          </p>
        ) : (
          <ul className="space-y-8">
            {orders.map((order) => (
              <li
                key={order._id}
                className="rounded-xl border border-gray-200 bg-white shadow-md p-6 hover:shadow-xl transition"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-semibold">{order._id}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 sm:mt-0">
                    Placed on:{" "}
                    <span className="font-medium">
                      {moment(order.createdAt).format("MMMM Do YYYY, h:mm A")}
                    </span>
                  </p>
                </div>

                {/* Status & Payment */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                      className={`font-bold ${
                        order.status === "Processing"
                          ? "text-yellow-600"
                          : order.status === "Shipped"
                          ? "text-blue-600"
                          : order.status === "Delivered"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>

                  <p className="text-gray-700">
                    <span className="font-semibold">Payment:</span>{" "}
                    {order.paymentStatus === "Paid" ? (
                      <FaCheck className="inline text-green-600 ml-1" />
                    ) : (
                      <FaTimes className="inline text-red-600 ml-1" />
                    )}{" "}
                    ({order.paymentStatus})
                  </p>

                  <p className="text-gray-700">
                    <span className="font-semibold">Payment ID:</span>{" "}
                    {order.razorpayPaymentId || "N/A"}
                  </p>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 border-b border-gray-200 pb-4"
                    >
                      <img
                        className="w-20 h-20 rounded-lg object-cover shadow"
                        src={`${item.productId?.image}`}
                        alt="Product"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">
                          {item.productId?.name || "Product"}
                        </p>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity} × ₹{item.productId?.price || 0}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="text-right mt-6">
                  <span className="inline-flex items-center gap-1 text-lg font-bold text-purple-700">
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
