
import http from '../../services/apiService';
const getAdoptionOffers = async () => {
  const response = await http.get(`/adoption-offers/published`);
  return response.data;
};
export const ApiService = {
  getAdoptionOffers,
};
