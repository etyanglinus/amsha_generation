import axios from 'axios';

export const getUserDashboard = async () => {
  const response = await axios.get('/api/dashboard');  // Replace with Spring Boot backend URL
  return response.data;
};
