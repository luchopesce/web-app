import axios from "axios";

export const apiServerInstance = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiExternInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_EXTERN_URL}`,
  headers: {
    "Content-Type": "application/json",
    "app-id": `${process.env.REACT_APP_API_ID}`,
  },
});


