import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createStatus = async (inputData) => {
  const response = await api.post(END_POINTS.STATUS(), inputData);
  return resResult(response);
};
export const getStatuss = async (inputData) => {
  const response = await api.get(END_POINTS.STATUS(), {
    params: inputData,
  });
  return resResult(response);
};
