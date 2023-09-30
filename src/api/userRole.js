import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createUserRole = async (inputData) => {
  const response = await api.post(END_POINTS.USERROLE(), inputData);
  return resResult(response);
};
export const getUserRoles = async (inputData) => {
  const response = await api.get(END_POINTS.USERROLE(), {
    params: inputData,
  });
  return resResult(response);
};
