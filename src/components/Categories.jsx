import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaLaptop,
  FaTshirt,
  FaHome,
  FaFootballBall,
  FaThLarge,
} from "react-icons/fa";

const Categories = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 p-3 rounded-md transition duration-200 ${
      isActive ? "bg-green-600 text-white font-semibold" : "hover:bg-gray-200"
    }`;

  return (
    <div className="w-56 h-screen sticky top-0 bg-[#c4b5fd] shadow-md">
      <ul className="flex flex-col p-4 gap-3 mt-10">
        <li className="text-lg font-bold text-green-700 mb-2 flex items-center gap-2">
          <FaThLarge /> Categories
        </li>

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
  );
};

export default Categories;
