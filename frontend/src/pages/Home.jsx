// import React, { useEffect, useState } from "react";
// import homeImages from "../data/homeImages";
// import { useAuth } from "../context/AuthContext";
// const Home = () => {
//   const { user } = useAuth(); // Accessing user from AuthContext
//   console.log("User in Home:", user); // Debugging user data
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-scroll every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[84vh] ] ">
//       <div className="relative w-full ">
//         <img
//           src={homeImages[currentIndex]}
//           alt={`Slide ${currentIndex}`}
//           className="w-full h-[70vh]  object-cover transition-all duration-700"
//         />

//         {/* Dots Navigation */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//           {homeImages.map((_, idx) => (
//             <div
//               key={idx}
//               className={`w-3 h-3 rounded-full ${
//                 idx === currentIndex ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>

//       <div className="text-center">
//         <h1 className="text-4xl font-bold  text-gray-200 mt-4">
//           <div className="relative flex text-3xl font-extrabold gap-1 select-none items-center justify-center">
//              Welcome to  {" "}
//             <span className="ml-1 bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[-6deg]">
//                 S
//             </span>
//             <span className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[3deg]">
//               H
//             </span>
//             <span className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[-2deg]">
//               O
//             </span>
//             <span className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[4deg]">
//               P
//             </span>
//             <span className="text-gray-200 rotate-[2deg]">P</span>
//             <span className="text-gray-200 relative rotate-[-3deg]">
//               Y
              
//             </span>
//             <div className="text-gray-200 font-bold">, { user?.name?.split(" ")[0]}</div>
//           </div>
//         </h1>
//         <p className="text-gray-300 mt-2">
//           Discover the best deals on fashion, electronics, sports & more.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;

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


