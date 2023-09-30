import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createBucketAPI = async (inputData) => {
  const response = await api.post(END_POINTS.BUCKET(), inputData);
  return response;
};

export const getBucketsAPI = async (inputData) => {
  const response = await api.get(END_POINTS.BUCKET(), {
    params: inputData,
  });
  return response;
};

export const getBucketByIdAPI = async (inputData) => {
  const response = await api.get(`${END_POINTS.BUCKET()}/${inputData}`);
  return response;
};

export const getBucketFilterAPI = async (inputData) => {
  const response = await api.get(`${END_POINTS.BUCKET()}/filters`, {
    params: inputData,
  });
  return response;
}