import axios from "axios";
import { showLoading, hideLoading } from "./context/LoadingContext";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // include cookies in requests
});

axiosInstance.interceptors.request.use((config) => {
  showLoading();
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    hideLoading();
    return res;
  },
  (err) => {
    hideLoading();
    return Promise.reject(err);
  }
);

export default axiosInstance;

