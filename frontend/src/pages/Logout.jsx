import React from "react";
import axios from "../axios"; // Axios instance with baseURL
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout", { withCredentials: true });
      localStorage.removeItem("authUser"); // or useContext if you're using context
      navigate("/login"); // Redirect to login page after logout
      alert("Logout Successful!");
    } catch (error) {
      console.error("Logout failed:", error);
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
