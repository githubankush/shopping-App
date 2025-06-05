import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-[calc(100vh-6rem)] bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex items-center justify-center overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-3xl text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          About <span className="text-purple-300">SHOPPY</span>
        </h1>
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
