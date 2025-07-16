// src/components/Loading.jsx
import React from "react";
import { useLoading } from "../context/LoadingContext";
import { FaShoppingBag } from "react-icons/fa"; // Or any icon you like

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-[6px] border-white border-t-primary rounded-full animate-spin" />

        {/* Branding */}
        <div className="flex items-center space-x-2 text-white text-xl font-semibold tracking-wide">
          <FaShoppingBag className="text-primary animate-bounce" />
          <span className="animate-pulse">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
