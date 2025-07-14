import axios from "axios";
import { showLoader, hideLoader } from "./utils/loaderControl"; // Utility function 

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // include cookies in requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    showLoader(); // 🔁 Start loading before request
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    hideLoader(); // ✅ Stop loading on success
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

export default axiosInstance;

