// src/components/PageLoadingWrapper.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";

const PageLoadingWrapper = () => {
  const location = useLocation();
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    const timer = setTimeout(() => {
      hideLoading();
    }, 500); // simulate delay or use actual logic

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default PageLoadingWrapper;
