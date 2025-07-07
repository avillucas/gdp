
import http from '../../lib/apiService';

const register = async (data) => {
  const response = await http.post(`/register`, data);
  return response.data;
};
export const ApiService = {
  register,
};