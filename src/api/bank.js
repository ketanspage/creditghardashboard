import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createBankAPI = async (inputData) => {
  const response = await api.post(END_POINTS.BANK(), inputData);
  return response;
};
export const getBanksAPI = async (inputData) => {
  const response = await api.get(END_POINTS.BANK(), {
    params: inputData,
  });
  return response;
};
