import axios from 'axios';

if (!import.meta.env.VITE_API_URL) {
   throw new Error("Missing base url environment variable");
}

const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   timeout: 10000, // 10 seconds timeout
   withCredentials: true,
});

export default axiosInstance;