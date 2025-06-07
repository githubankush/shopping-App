import React, { useEffect, useState } from "react";
import homeImages from "../data/homeImages";
import { useAuth } from "../context/AuthContext";
const Home = () => {
  const { user } = useAuth(); // Accessing user from AuthContext
  console.log("User in Home:", user); // Debugging user data
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[84vh] ] ">
      <div className="relative w-full ">
        <img
          src={homeImages[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[70vh]  object-cover transition-all duration-700"
        />

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {homeImages.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold  text-gray-200 mt-4">
          <div className="relative flex text-3xl font-extrabold gap-1 select-none items-center justify-center">
             Welcome to  {" "}
            <span className="ml-1 bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[-6deg]">
                S
            </span>
            <span className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[3deg]">
              H
            </span>
            <span className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[-2deg]">
              O
            </span>
            <span className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[4deg]">
              P
            </span>
            <span className="text-gray-200 rotate-[2deg]">P</span>
            <span className="text-gray-200 relative rotate-[-3deg]">
              Y
              
            </span>
            <div className="text-gray-200 font-bold">, { user?.name?.split(" ")[0]}</div>
          </div>
        </h1>
        <p className="text-gray-300 mt-2">
          Discover the best deals on fashion, electronics, sports & more.
        </p>
      </div>
    </div>
  );
};

export default Home;
