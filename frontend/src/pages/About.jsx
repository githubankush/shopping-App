import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const About = () => {
  const Navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-8rem)] bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex flex-col items-center justify-evenly  sm:px-6 py-5 md:px-12 ">
      
      {/* Back/Forward Buttons */}
      <div className="w-full flex items-center gap-4 mb-8 ">
        <button
          className="text-green-400 text-xl hover:text-green-300 transition"
          onClick={() => Navigate(-1)}
        >
          <FaAngleLeft />
        </button>
        <button
          className="text-green-400 text-xl hover:text-green-300 transition"
          onClick={() => Navigate(1)}
        >
          <FaAngleRight />
        </button>
      </div>

      {/* Main About Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-4xl text-center space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl font-bold">
          About <span className="text-purple-300">SHOPPY</span>
        </h1>

        <div className="bg-violet-800 p-2 sm:p-3 rounded-lg shadow-lg mb-4" />

        <p className="text-base sm:text-lg leading-relaxed text-gray-200">
          Welcome to <strong>SHOPPY</strong> — your one-stop online destination for a seamless shopping experience!
          We provide a wide range of products at unbeatable prices, all from the comfort of your home.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-200">
          At SHOPPY, we believe in quality, convenience, and customer satisfaction. Whether you’re shopping for the
          latest electronics, fashion, or home essentials, our platform is built to serve you with reliability and speed.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-200">
          Our easy-to-use interface, secure payment gateway, and fast delivery system ensure that your shopping
          journey is smooth and enjoyable. Register now and experience the future of e-commerce.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
