import React from "react";
import { useLoading } from "../context/LoadingContext";

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      <p className="ml-4 text-white text-lg animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;
