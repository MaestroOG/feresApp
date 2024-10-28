// services/apiConfig.js
import axios from "axios";

// Set up Axios instance with BASE_URL
const BASE_URL = "https://suuq.feres.co";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
