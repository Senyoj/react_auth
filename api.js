import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // [API_HERE]

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// log in user
export const loginUser = async (email, password) => {
  return axiosInstance.post('/auth/login', { email, password });
};

// register user
export const registerUser = async (email, password) => {
  return axiosInstance.post('/auth/register', { email, password });
};

