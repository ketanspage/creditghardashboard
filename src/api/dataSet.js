import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createDataSetAPI = async (inputData , token) => {
  const response = await api.post(END_POINTS.DATASET(), inputData ,
  );
  return response;
};
export const getDataSetsAPI = async (inputData, token) => {
  const response = await api.get(END_POINTS.DATASET(), {
    params: inputData,
   
  });
  return response;
};
