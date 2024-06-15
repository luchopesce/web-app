import axios from 'axios';

// Instancia de axios para tu servidor
const axiosServerInstance = axios.create({
  baseURL:  `${process.env.REACT_APP_API_URL}api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Instancia de axios para la API original
const axiosOriginalInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1', // Reemplaza esto con la URL de la API original
  headers: {
    'Content-Type': 'application/json',
    "app-id": "666b49a79528dbe7f3bc9714", // Reemplaza con tu app ID de DummyAPI
  },
});

export { axiosServerInstance, axiosOriginalInstance };
