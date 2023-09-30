import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createDataSetBucketAPI = async (inputData) => {
  const response = await api.post(END_POINTS.DATASETBUCKET(), inputData);
  return response;
};
export const getDataSetBucketsAPI = async (inputData) => {
  const response = await api.get(END_POINTS.DATASETBUCKET(), {
    params: inputData,
  });
  return response;
};
export const getDataSetBucketByIdAPI = async (inputData) => {
  const response = await api.get(`${END_POINTS.DATASETBUCKET()}/${inputData}`);
  return response;
};
