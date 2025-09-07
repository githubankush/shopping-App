import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //  Auto-redirect if already logged in
  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin/products"); 
    } else if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", formData, {
        withCredentials: true,
        metadata: { showLoading: true },
      });

      if (!res?.data?.user) {
        throw new Error("No user data received from server");
      }

      const loggedInUser = res.data.user;
      setUser(loggedInUser); 

      // Redirect based on role
      if (loggedInUser.role === "admin") {
        toast.success("Admin Login Successful!");
        navigate("/admin/products"); 
      } else {
        toast.success("Login Successful!");
        navigate("/");
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error(err?.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex items-center justify-center bg-[#6d28d9] p-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#6d28d9] mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-full bg-[#6d28d9] hover:bg-[#5b21b6] text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#6d28d9] font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
