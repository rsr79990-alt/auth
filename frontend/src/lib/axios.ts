import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Cache-Control": "no-cache",
  },
});
