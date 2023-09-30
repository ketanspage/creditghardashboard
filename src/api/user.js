import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createUser = async (inputData) => {
  const response = await api.post(END_POINTS.USER(), inputData);
  return resResult(response);
};
export const getUsers = async (inputData) => {
  const response = await api.get(END_POINTS.USER(), {
    params: inputData,
  });
  return resResult(response);
};
