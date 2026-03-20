import axios from 'axios';

/**
 * axiosInstance
 * Base Axios instance shared across all service modules.
 * Interceptors are registered in interceptors.js.
 */
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
    timeout: 15000,
    withCredentials: true, // Send cookies (refresh token) automatically
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default axiosInstance;
