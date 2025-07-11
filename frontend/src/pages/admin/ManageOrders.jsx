import React, { useEffect, useState } from "react";
import axios from "../../axios"
import toast from "react-hot-toast";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/api/admin/orders");
        setOrders(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch orders.");
      }
    };

    fetchOrders();
  }, []);

  const handleUpdateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`/api/admin/order/${orderId}/status`, { status });
      const updatedOrders = orders.map((order) =>
        order._id === orderId ? { ...order, status } : order
      );
      setOrders(updatedOrders);
      toast.success(`Order marked as ${status}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status.");
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`/api/admin/order/${orderId}`);
      const updatedOrders = orders.filter((order) => order._id !== orderId);
      setOrders(updatedOrders);
      toast.success("Order deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete order.");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Orders</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Order Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800">{order._id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order.customerName || order.userId.name|| "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleUpdateOrderStatus(order._id, "Shipped")}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Ship
                    </button>
                    <button
                      onClick={() => handleUpdateOrderStatus(order._id, "Delivered")}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Deliver
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
