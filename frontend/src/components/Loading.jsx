// src/components/Loading.jsx
import React from "react";
import { useLoading } from "../context/LoadingContext";
import { FaShoppingBag } from "react-icons/fa";

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md">
      <div className="relative flex flex-col items-center justify-center p-10 rounded-2xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 space-y-6">
        {/* Spinner with glow */}
        <div className="relative">
          <div className="w-20 h-20 border-[6px] border-white/30 border-t-primary rounded-full animate-spin" />
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-ping" />
        </div>

        {/* Branding */}
        <div className="flex items-center space-x-3 text-white text-2xl font-semibold tracking-wide drop-shadow-lg">
          <FaShoppingBag className="text-primary animate-bounce drop-shadow-md" />
          <span className="animate-pulse">Loading...</span>
        </div>

        {/* Small glowing dots */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:200ms]" />
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
