import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../utils/Logo";
import SearchBar from "../utils/SearchBar";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user } = useAuth();
  const { cart, fetchCart } = useCart();
  const cartItemCount =
    cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 bg-[#6d28d9]/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lg transition ${
                isActive(link.path)
                  ? "text-green-400 font-semibold"
                  : "text-white hover:text-green-300"
              }`}
            >
              {link.name}
              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Search */}
          <SearchBar />

          {/* Auth */}
          {user ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 text-white hover:text-green-400 transition"
            >
              <FaUser size={18} />
              <span className="hidden sm:inline font-medium">{user.name}</span>
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="px-4 py-1.5 rounded-md bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium hover:scale-105 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-medium hover:scale-105 transition"
              >
                Login
              </Link>
            </>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-yellow-300 transition">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 py-0.5 rounded-full text-white animate-pulse shadow-md">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-b from-[#6d28d9] to-[#4c1d95] text-white px-4 space-y-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`block py-2 border-b border-white/20 ${
              isActive(link.path) ? "text-green-400 font-semibold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}

        <div className="pt-2">
          <SearchBar />
        </div>

        {user ? (
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 hover:text-green-400 transition"
          >
            <FaUser size={18} />
            <span>{user.name}</span>
          </Link>
        ) : (
          <>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-green-400 to-emerald-500 text-black py-2 rounded-md text-center font-medium hover:scale-105 transition"
            >
              Register
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-2 rounded-md text-center font-medium hover:scale-105 transition"
            >
              Login
            </Link>
          </>
        )}

        <Link
          to="/cart"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 hover:text-yellow-300 transition"
        >
          <FaShoppingCart size={20} />
          <span>Cart ({cartItemCount})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
