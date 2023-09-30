import axios from "axios";
import config from "../config";

const env = process.env.NODE_ENV || "development";
const baseURL = config[env].BASE_URL;

const api = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    // You can add your authentication logic here if needed
    // For example, adding a token to the request headers
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => {
    // Return the response if it's successful
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Redirect to the login page or perform any other action here
      localStorage.setItem("token" , "");
      window.location.href = "/login"; // Change the URL to your login page
    }
    return Promise.reject(error);
  }
);

export const resResult = (result) => result.data;

export default api;
