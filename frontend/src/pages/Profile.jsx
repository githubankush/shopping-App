import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Logout from "./Logout";
import axios from "../axios";
import moment from "moment";
import { FaUser, FaBox, FaRupeeSign, FaCheck, FaTimes, FaShippingFast } from "react-icons/fa";

const Profile = () => {
  const { user,loading } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/order/user", {
          withCredentials: true,
        });
        console.log("Fetched orders:", res.data);
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err.response?.data || err.message);
      }
    };

    if (user) fetchOrders();
  }, [user]);

  if (loading) {
    return <h1 className="flex items-center justify-center h-screen text-white text-2xl font-semibold">Loading...</h1>;
  }
  if (!user) {
    return (
      <h1 className="flex items-center justify-center h-screen text-white text-2xl font-semibold">
        Please login to view your profile
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 p-4 sm:p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-300">👤 User Profile</h1>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto mb-8 bg-white rounded-xl shadow-lg p-6 text-black">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><FaUser /> Profile Info</h2>
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <div className="mt-4">
          <Logout />
        </div>
      </div>

      {/* Orders */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-black">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><FaBox /> Order History</h2>

        {orders.length === 0 ? (
          <p className="text-gray-600">You haven't placed any orders yet.</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order) => (
              <li key={order._id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="mb-2">
                  <span className="text-sm text-gray-500">Order ID:</span>
                  <p className="font-semibold">{order._id}</p>
                </div>

                <p className="text-sm text-gray-600">
                  Placed on: {moment(order.createdAt).format("MMMM Do YYYY, h:mm A")}
                </p>

                <div className="text-sm mt-2 text-gray-600">
                  <p className="text-gray-600 flex items-center gap-1 ">
                    Status:{" "}
                    <span className={`font-semibold  ${order.status === "Processing"
                        ? "text-yellow-600"
                        : order.status === "Shipped"
                          ? "text-blue-600"
                          : order.status === "Delivered"
                            ? "text-green-600"
                            : "text-red-600"
                      }`}>
                      {order.status}
                    </span>
                  </p>

                  <p className="text-gray-600">Payment: {order.paymentStatus === "Paid" ? <FaCheck className="inline text-green-600" /> : <FaTimes className="inline text-red-600" />} ({order.paymentStatus})</p>
                  <p className="text-gray-600">Payment ID: {order.razorpayPaymentId}</p>
                </div>

                <div className="mt-4 space-y-1 text-sm text-gray-700">
                  {order.items.map((item, idx) => (
                    <>
                    <img className="w-20 h-20 rounded-lg object-cover mb-2" src={`${item.productId?.image}`} alt="image" />
                    <p key={idx}>
                      • <span className="font-medium">{item.productId?.name || "Product"}</span> × {item.quantity} @ ₹{item.productId?.price || 0}
                    </p>
                    
                    </>
                  ))}
                </div>

                <div className="text-right mt-4">
                  <span className="text-lg font-bold text-purple-700 flex items-center justify-end gap-1">
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
