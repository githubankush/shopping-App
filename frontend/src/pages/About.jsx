import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaAlignLeft, FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
const About = () => {
  const Navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-6rem)] bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex flex-col items-center justify-evenly overflow-hidden ">
      <div className="w-full flex items-start justify-start ml-6 p-2 rounded-lg mb-10">
        <button className="text-green-600 text-2xl" onClick={()=>Navigate(-1)} ><FaAngleLeft /></button>
        <button className="ml-5 text-green-600 text-2xl" onClick={()=>Navigate(1)} ><FaAngleRight /></button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-3xl text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          About <span className="text-purple-300">SHOPPY</span>
        </h1>
        <div className="bg-violet-800 p-3 rounded-lg shadow-lg mb-6"></div>
        <p className="text-lg leading-relaxed text-gray-200">
          Welcome to <strong>SHOPPY</strong> — your one-stop online destination for a seamless shopping experience!
          We provide a wide range of products at unbeatable prices, all from the comfort of your home.
        </p>
        <p className="text-lg leading-relaxed text-gray-200">
          At SHOPPY, we believe in quality, convenience, and customer satisfaction. Whether you’re shopping for the
          latest electronics, fashion, or home essentials, our platform is built to serve you with reliability and speed.
        </p>
        <p className="text-lg leading-relaxed text-gray-200">
          Our easy-to-use interface, secure payment gateway, and fast delivery system ensure that your shopping
          journey is smooth and enjoyable. Register now and experience the future of e-commerce.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
