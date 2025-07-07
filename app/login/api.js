
import http from '../../lib/apiService';

const login = async (data) => {
  const response = await http.post(`/auth/login`, data);
  return response.data;
};
export const ApiService = {
  login,
};