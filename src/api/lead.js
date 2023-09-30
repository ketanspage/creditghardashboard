import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createLeadAPI= async (inputData, token) => {
  const response = await api.post(END_POINTS.LEAD(), inputData, );
  return response;
};
export const getLeadsAPI = async (inputData, token) => {
  const response = await api.get(END_POINTS.LEAD(), {
    params: inputData,
  });
  return response;
};
export const getLeadsFilterAPI = async (inputData) => {
  const response = await api.get(`${END_POINTS.LEAD()}/filters`, {
    params: inputData,
  });
  return response;
}