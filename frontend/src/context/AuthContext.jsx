import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/auth/profile', { withCredentials: true });
        setUser(res.data);
      } catch {
        setUser(null);
        console.error("Not logged in:", err.response?.data || err.message);
      } finally {
        setLoading(false); // Important!
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {loading ? <p className='text-center text-xl font-bold mt-10 '>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
