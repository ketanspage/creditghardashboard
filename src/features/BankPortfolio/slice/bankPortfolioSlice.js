import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBankPortfoliosAPI } from "../../../api/bankPortfolio";

export const getBankPortfolios = createAsyncThunk(
  "bankPortfolioData/getBankPortfolios",
  async (data, { getState, dispatch }) => {
    try {
   
      const response = await getBankPortfoliosAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const bankPortfolioSlice = createSlice({
  name: "bankPortfolioData",
  initialState: {
    bankPortfolios: {},
    loadingBankPortfolio: false,
    error: "",
  },
  reducers: {
    // logout : ({user, ...rest}) => {
    //   return {
    //     user: {},
    //     ...rest,
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBankPortfolios.pending, (state) => {
        state.loadingBankPortfolio = true;
      })
      .addCase(getBankPortfolios.fulfilled, (state, action) => {
        state.loadingBankPortfolio = false;
        if (action.payload) {
          state.bankPortfolios = action.payload;
        }
      })
      .addCase(getBankPortfolios.rejected, (state, action) => {
        state.loadingBankPortfolio = false;
        state.error = action.error.message;
      });
  },
});

export const {} = bankPortfolioSlice.actions;
export default bankPortfolioSlice.reducer;
