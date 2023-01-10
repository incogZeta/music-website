import axios from "axios";

export const client = axios.create({
  baseURL: "https://music-be.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
