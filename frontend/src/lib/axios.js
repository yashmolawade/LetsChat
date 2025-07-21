import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://letschat-backend-4jfe.onrender.com",
  withCredentials: true,
});
