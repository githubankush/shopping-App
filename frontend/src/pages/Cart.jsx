// pages/Cart.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axios';

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get('/api/cart', { withCredentials: true });
      setCart(res.data);
    };
    fetchCart();
  }, []);

  if (!cart) return <p className='text-white'>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl text-white font-bold mb-4">Your Cart</h2>
      {cart.items.map((item, i) => (
        <div key={i} className="flex justify-between border-b py-2">
          <span>{item.productId.name}</span>
          <span>Qty: {item.quantity}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
