import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createCampaign = async (inputData) => {
  const response = await api.post(END_POINTS.CAMPAIGN(), inputData);
  return resResult(response);
};
export const getCampaigns = async (inputData) => {
  const response = await api.get(END_POINTS.CAMPAIGN(), {
    params: inputData,
  });
  return resResult(response);
};
