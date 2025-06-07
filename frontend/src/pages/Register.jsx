import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", formData);
      alert("Registration successful!");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error?.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center bg-[#6d28d9]">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-center text-[#6d28d9] mb-6">
          Create Account
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#6d28d9] hover:bg-[#5b21b6] text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </div>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#6d28d9] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
