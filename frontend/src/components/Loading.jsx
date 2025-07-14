import React from "react";
import { useLoading } from "../context/LoadingContext";

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-70 backdrop-blur-sm">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-4 text-gray-700 dark:text-gray-200 text-base sm:text-lg font-medium animate-pulse tracking-wide">
        Please wait...
      </p>
    </div>
  );
};

export default Loading;
