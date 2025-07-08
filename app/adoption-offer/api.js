
import http from '../../services/apiService';

const getAll = async () => {
  const response = await http.get(`/adoption-offers`);
  return response.data;
};

const deleteOffer = async (id) => {
  const response = await http.post(`/adoption-offers/${id}`);
  return response.data;
};
const publishOffer = async (id) => {
  const response = await http.post(`/adoption-offers/${id}/publish`);
  return response.data;
};

const draftOffer = async (id) => {
  const response = await http.post(`/adoption-offers/${id}/draft`);
  return response.data;
};


export const ApiService = {
  deleteOffer,
  publishOffer,
  draftOffer,
  getAll,
};