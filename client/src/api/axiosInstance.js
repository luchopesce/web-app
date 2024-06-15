import axios from 'axios';

// Instancia de axios para tu servidor
const axiosServerInstance = axios.create({
  baseURL:  `${process.env.REACT_APP_API_SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Instancia de axios para la API original
const axiosOriginalInstance = axios.create({
  baseURL:  `${process.env.REACT_APP_API_URL}`, // Reemplaza esto con la URL de la API original
  headers: {
    'Content-Type': 'application/json',
    "app-id": `${process.env.REACT_APP_API_ID}` ,
  },
});

export { axiosServerInstance, axiosOriginalInstance };
