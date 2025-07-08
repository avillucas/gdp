
import http from '../../services/apiService';



const getAll = async () => {
  const response = await http.get(`/adoption-requests`);
  return response.data;
};

const AproveAdoptionRequest = async (id) => {
  const response = await http.post(`/adoption-requests/${id}/approve`);
  return response.data;
};

const RejectAdoptionRequest = async (id) => {
  const response = await http.post(`/adoption-requests/${id}/reject`);
  return response.data;
};

export const ApiService = {
  AproveAdoptionRequest,
  RejectAdoptionRequest,
  getAll,
};