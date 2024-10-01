import axios from 'axios';

export const loginUser = async (credentials) => {
  const response = await axios.post('/api/login', credentials);  // Replace with Spring Boot backend URL
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post('/api/register', userData);
  return response.data;
};



