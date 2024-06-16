import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true,
});

export const loginWithGoogle = () => {
  window.location.href = 'http://localhost:8080/api/auth/google';
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
