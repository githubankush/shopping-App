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
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes glow {
            0% { text-shadow: 0 0 5px #84cc16, 0 0 10px #22c55e; }
            100% { text-shadow: 0 0 15px #bbf7d0, 0 0 25px #22c55e; }
          }
        `}
      </style>

      <div className="relative flex items-center text-4xl font-extrabold gap-1 select-none tracking-wide drop-shadow-md">
        {["S", "H", "O", "P"].map((letter, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-r from-lime-300 via-emerald-400 to-green-600 
              bg-[length:200%_100%] bg-clip-text text-transparent 
              animate-[shimmer_3s_linear_infinite] 
              drop-shadow-lg transform rotate-[-2deg]"
          >
            {letter}
          </span>
        ))}

        {/* Last two letters styled differently for emphasis */}
        <span className="text-white animate-[glow_2s_ease-in-out_infinite_alternate] rotate-2">
          P
        </span>
        <span className="relative text-white rotate-[-3deg] animate-[glow_2s_ease-in-out_infinite_alternate]">
          Y
          {/* Shopping bag icon with bounce */}
          <FaShoppingBag
            className="absolute -top-3 -right-4 text-emerald-400 text-lg 
              drop-shadow-md animate-[bounce_1.5s_infinite]"
          />
        </span>
      </div>
    </>
  );
};

export default Logo;
