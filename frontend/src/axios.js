// src/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // include cookies in requests
});

export default axiosInstance;
