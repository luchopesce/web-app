import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://web-app-6qpp.onrender.com/api',
  withCredentials: true,
});

export const loginWithGoogle = () => {
  window.location.href = 'https://web-app-6qpp.onrender.com/api/auth/google';
};

export const verifyToken = async (token) => {
  console.log(token)
  const response = await axiosInstance.get('/auth/verify', {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
  console.log(response.data)
  return response.data;
};
