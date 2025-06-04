import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Logo = () => {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -500px 0;
            }
            100% {
              background-position: 500px 0;
            }
          }
        `}
      </style>

      <div className="relative flex text-3xl font-extrabold gap-1 select-none ">
        <span
          className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[-6deg]"
        >
          S
        </span>
        <span
          className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[3deg]"
        >
          H
        </span>
        <span
          className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[-2deg]"
        >
          O
        </span>
        <span
          className="bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] rotate-[4deg]"
        >
          P
        </span>
        <span className="text-white rotate-[2deg]">P</span>
        <span className="relative text-white rotate-[-3deg]">
          Y
          <FaShoppingBag className="absolute -top-2 -right-2 text-green-400 text-xs  bg-gradient-to-r from-lime-300 via-green-500 to-lime-300 bg-[length:200%_100%] bg-clip-text animate-[shimmer_3s_linear_infinite] rotate-[-6deg]" />
        </span>
      </div>
    </>
  );
};

export default Logo;
