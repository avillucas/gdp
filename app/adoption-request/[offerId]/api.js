
import http from '../../../services/apiService';

const createAdoptionRequestMine = async (requestData) => {
  if(!requestData || !requestData.address || !requestData.phone || !requestData.application || !requestData.pet_id) {
    throw new Error("Invalid pet data provided");
  }
  console.log("Creating adoption request with data:", requestData);
  const response = await http.post(`/adoption-requests/mine`, requestData);
  return response.data;
};
const getOfferById = async (id) => {
  const response = await http.get(`/adoption-offers/${id}`);
  return response.data;
};
export const ApiService = {
  createAdoptionRequestMine,
  getOfferById,
};