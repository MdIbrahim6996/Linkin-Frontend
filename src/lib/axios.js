import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api/v1"
      : SERVER_URL,
});
