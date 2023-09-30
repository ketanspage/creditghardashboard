import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createBankPortfolioAPI = async (inputData, ) => {
  const response = await api.post(END_POINTS.BANKPORTFOLIO(), inputData);
  return response;
};
export const getBankPortfoliosAPI = async (inputData, token) => {
  const response = await api.get(END_POINTS.BANKPORTFOLIO(), {
    params: inputData,
    
  });
  return response;
};
