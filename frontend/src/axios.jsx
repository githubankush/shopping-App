// src/axios.jsx
import axios from "axios";
import { showLoading, hideLoading } from "./utils/LoadingController";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Sends cookies (for auth/session)
});

// Show loading only if metadata says so
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.metadata?.showLoading) {
      showLoading();
    }
    return config;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

// Hide loading on response (if previously shown)
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.metadata?.showLoading) {
      hideLoading();
    }
    return response;
  },
  (error) => {
    if (error.config?.metadata?.showLoading) {
      hideLoading();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
