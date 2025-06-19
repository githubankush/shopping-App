import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Logout from './Logout';
import axios from '../axios';
import moment from 'moment';

const Profile = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('/api/order/user', { withCredentials: true });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (!user) {
    return (
      <h1 className='flex items-center justify-center h-[calc(100vh-8rem)] text-white text-3xl font-bold'>
        Please login to view your profile
      </h1>
    );
  }

  return (
    <div className='min-h-[calc(100vh-8rem)] bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-6'>
      <h1 className="text-3xl font-bold text-center text-purple-300">User Profile</h1>

      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-black">
        <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
        <p className="mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <div className="mt-4"><Logout /></div>
      </div>

      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-black">
        <h2 className="text-2xl font-semibold mb-4">Order History</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders found.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li key={order._id} className="border-b border-gray-300 pb-4">
                <p className="font-semibold text-lg mb-1">Order ID: #{order._id}</p>
                <p className="text-sm text-gray-600 mb-2">Date: {moment(order.createdAt).format("MMMM Do YYYY, h:mm A")}</p>
                <div className="ml-4">
                  {order.products.map((p, idx) => (
                    <p key={idx} className="text-gray-700 text-sm">
                      - {p.name} × {p.quantity} @ ₹{p.price}
                    </p>
                  ))}
                </div>
                <p className="text-right font-bold text-green-700 mt-2">Total: ₹{order.amount}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
