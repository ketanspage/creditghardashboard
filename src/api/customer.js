import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createCustomer = async (inputData) => {
  const response = await api.post(END_POINTS.CUSTOMER(), inputData);
  return resResult(response);
};
export const getCustomers = async (inputData) => {
  const response = await api.get(END_POINTS.CUSTOMER(), {
    params: inputData,
  });
  return resResult(response);
};
