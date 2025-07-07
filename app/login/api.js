
import http from '../../services/apiService';

const login = async (data) => {
  const response = await http.post(`/login`, data);
  return response.data;
};
export const ApiService = {
  login,
};