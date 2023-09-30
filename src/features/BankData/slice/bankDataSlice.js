import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanksAPI } from "../../../api/bank";

export const getBanks = createAsyncThunk(
  "bankData/getBanks",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getBanksAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const bankDataSlice = createSlice({
  name: "bankData",
  initialState: {
    bank: {},
    loading: false,
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
      .addCase(getBanks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBanks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.bank = action.payload;
        }
      })
      .addCase(getBanks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = bankDataSlice.actions;
export default bankDataSlice.reducer;
