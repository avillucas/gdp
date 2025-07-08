
import http from '../../../services/apiService';



const createAdoptionRequestMine = async () => {
  const response = await http.post(`/adoption-requests/mine`);
  return response.data;
};

export const ApiService = {
  createAdoptionRequestMine,
};