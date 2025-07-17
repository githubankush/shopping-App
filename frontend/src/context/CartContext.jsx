// context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    try {
      const res = await axios.get('/api/cart', { withCredentials: true, metadata: { showLoading: true } });
      setCart(res.data);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    }
  };
 
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
