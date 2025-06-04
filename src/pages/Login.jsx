import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[calc(100vh-8rem)]  flex items-center justify-center bg-[#6d28d9] p-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#6d28d9] mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
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
          <Link to="/register" className="text-[#6d28d9] font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
