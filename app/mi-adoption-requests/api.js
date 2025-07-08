
import http from '../../services/apiService';



const getMineAdoptionRequests = async () => {
  const response = await http.get(`/adoption-requests/mine`);
  return response.data;
};

export const ApiService = {
  getMineAdoptionRequests,
};