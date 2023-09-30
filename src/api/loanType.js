import { END_POINTS } from ".";
import api, { resResult } from "./api";

export const createLoanType = async (inputData) => {
  const response = await api.post(END_POINTS.LOANTYPE(), inputData);
  return resResult(response);
};
export const getLoanTypes = async (inputData) => {
  const response = await api.get(END_POINTS.LOANTYPE(), {
    params: inputData,
  });
  return resResult(response);
};
