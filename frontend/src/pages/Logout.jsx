import React from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext"; 

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); 

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout", {
        withCredentials: true,
        metadata: { showLoading: true },
      });

      // Clear user from context
      setUser(null);

      toast.success("Logout Successful!");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Try again.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default Logout;
