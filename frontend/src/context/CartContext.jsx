// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const auth = useAuth();
  const authUser = auth?.authUser;

  const [cart, setCart] = useState([]);

  // Fetch user's cart when authUser changes
  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (authUser?._id) {
          const res = await axios.get(`/api/cart/${authUser._id}`, { withCredentials: true });
          setCart(res?.data?.cartItems || []);
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [authUser]);

  // Add to cart
  const addToCart = async (product) => {
    try {
      const res = await axios.post(
        `/api/cart/add`,
        { userId: authUser._id, product },
        { withCredentials: true }
      );
      setCart(res?.data?.cartItems || []);
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
