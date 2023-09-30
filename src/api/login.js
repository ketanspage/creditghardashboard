import { END_POINTS } from ".";
import api from "./api";

export const loginAPI = async (inputData) => {
  const response = await api.post(END_POINTS.LOGIN(), inputData);
  return response;
};

export const registerAPI = async (inputData) => {
  const response = await api.post(END_POINTS.REGISTER(), inputData);
  return response;
};
