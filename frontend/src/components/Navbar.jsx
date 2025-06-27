import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../utils/Logo";
import SearchBar from "../utils/SearchBar";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user} = useAuth();
  const {cart, fetchCart} = useCart();
  const cartItemCount = cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
  ];
   
  useEffect(() => {
    fetchCart(); // Fetch cart items on mount
  }
  , [fetchCart]);
  

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="bg-[#6d28d9] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-md hover:text-green-400 transition ${
                isActive(link.path) ? "text-green-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <SearchBar />

          {user ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 text-md hover:text-green-400 transition"
            >
              <FaUser size={18} />
              <span className="hidden sm:inline">{user.name}</span>
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="px-3 py-1 border border-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-3 py-1 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition"
              >
                Login
              </Link>
            </>
          )}

          <Link
            to="/cart"
            className="relative hover:text-yellow-300 transition"
          >
            <FaShoppingCart size={22} />
            {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
          {cartItemCount}
        </span>
      )}
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4c1d95] text-white px-4 pb-4 space-y-4">
          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 border-b border-gray-600 ${
                isActive(link.path) ? "text-green-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Search Bar (mobile) */}
          <div className="pt-2">
            <SearchBar />
          </div>

          {/* Auth/User Links */}
          {user ? (
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2"
            >
              <FaUser size={18} />
              <span>{user.name}</span>
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block bg-green-500 text-black py-1 rounded text-center"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block bg-blue-500 text-white py-1 rounded text-center"
              >
                Login
              </Link>
            </>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <FaShoppingCart size={20} />
            <span>Cart ({user?.cart?.length || 0})</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
