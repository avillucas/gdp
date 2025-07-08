
import http from '../../services/apiService';


const createAdoptionOffer = async (offerData) => {
  if(!offerData || !offerData.title || !offerData.headline || !offerData.pet_id) {
    throw new Error("Invalid offer data provided");
  }
  console.log("Creating adoption offer with data:", offerData);
  const response = await http.post(`/adoption-offers/`, offerData);
  return response.data;
};
export const ApiService = {
  createAdoptionOffer,
};