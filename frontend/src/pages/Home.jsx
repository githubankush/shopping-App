import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-10">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-2xl md:text-6xl font-bold text-slate-800 leading-snug sm:leading-tighter">
            Your One-Stop Shop for{" "}
            <span className="text-[#6d28d9]">
              <TypeAnimation
                sequence={[
                  "Gadgets",
                  2000,
                  "Fashion",
                  2000,
                  "Home Decor",
                  2000,
                  "Books",
                  2000,
                  "Fitness Gear",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Discover unbeatable deals, trending collections, and must-have essentials – all in one place.
          </p>
          <Link to="/product">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 bg-indigo-600 text-white text-base sm:text-lg font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl hover:bg-indigo-700 transition-all duration-300"
            >
              <ShoppingBag size={20} />
              Start Shopping
            </motion.button>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 w-full flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/images/hero-image.jpg" 
            alt="Shoppy Hero" 
            className="rounded-xl shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl transition-all"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;


