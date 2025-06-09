import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaLaptop,
  FaTshirt,
  FaHome,
  FaFootballBall,
  FaThLarge,
  FaAngleLeft,
  FaAngleRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Categories = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 p-3 rounded-md transition duration-200 ${
      isActive
        ? "bg-green-600 text-white font-semibold"
        : "hover:bg-gray-200 text-gray-700"
    }`;

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden flex justify-between items-center bg-violet-100 px-4 py-3 shadow-md sticky top-0 z-50">
        <h2 className="text-lg font-bold text-green-700">Categories</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-green-600 text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:sticky top-0 left-0 z-40 bg-violet-100 shadow-2xl w-64 h-full p-4 md:flex flex-col gap-2 `}
      >
        <div className="flex items-center justify-between mb-6 md:justify-start md:gap-4 md:ml-3">
          {/* Only show nav buttons on md+ screens */}
          <div className="hidden md:flex gap-4">
            <button onClick={() => navigate(-1)} className="text-xl text-green-600">
              <FaAngleLeft />
            </button>
            <button onClick={() => navigate(1)} className="text-xl text-green-600">
              <FaAngleRight />
            </button>
          </div>
          {/* Close button for mobile */}
          <button onClick={() => setIsOpen(false)} className="md:hidden text-green-600 text-xl">
            <FaTimes />
          </button>
        </div>

        <li className="text-lg font-bold text-green-700 mb-2 ml-3 flex items-center gap-2">
          <FaThLarge /> Categories
        </li>

        <ul className="flex flex-col gap-2">
          <NavLink to="/product" end className={navLinkClass}>
            <FaThLarge /> All Products
          </NavLink>

          <NavLink to="/product/electronics" className={navLinkClass}>
            <FaLaptop /> Electronics
          </NavLink>

          <NavLink to="/product/fashion" className={navLinkClass}>
            <FaTshirt /> Fashion
          </NavLink>

          <NavLink to="/product/homekitchen" className={navLinkClass}>
            <FaHome /> Home & Kitchen
          </NavLink>

          <NavLink to="/product/sports" className={navLinkClass}>
            <FaFootballBall /> Sports & Outdoors
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Categories;
