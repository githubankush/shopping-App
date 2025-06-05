import React, { useState } from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const dummyCart = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    quantity: 1,
    deliveryDate: "2025-06-09",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    quantity: 2,
    deliveryDate: "2025-06-11",
    image: "https://via.placeholder.com/100"
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(dummyCart);
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white shadow p-4 rounded-md">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Delivery by {item.deliveryDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 rounded bg-gray-200 hover:bg-gray-300"><FaMinus /></button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 rounded bg-gray-200 hover:bg-gray-300"><FaPlus /></button>
              </div>
              <div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Summary */}
          <div className="bg-white shadow p-4 rounded-md mt-6">
            <h4 className="text-lg font-semibold mb-2">Order Summary</h4>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>
          </div>

          {/* Payment Section */}
          <div className="bg-white shadow p-4 rounded-md mt-6">
            <h4 className="text-lg font-semibold mb-2">Choose Payment Method</h4>
            <div className="flex flex-col gap-2">
              {["UPI", "Credit Card", "Debit Card", "Net Banking", "Cash on Delivery"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={selectedPayment === method}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="accent-purple-600"
                  />
                  {method}
                </label>
              ))}
            </div>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
