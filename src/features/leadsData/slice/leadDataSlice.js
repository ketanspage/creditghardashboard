import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDataSetsAPI } from "../../../api/dataSet";
import { getLeadsAPI, getLeadsFilterAPI } from "../../../api/lead";

export const getDataSets = createAsyncThunk(
  "leadData/getDataSets",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getDataSetsAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getLeads = createAsyncThunk(
  "leadData/getLeads",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getLeadsAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getLeadFilterByDataSetId = createAsyncThunk(
  "leadData/getLeadFilterByDataSetId",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getLeadsFilterAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const leadDataSlice = createSlice({
  name: "leadData",
  initialState: {
    dataSets: {},
    leads: {},
    leadFilter: {},
    loading: false,
    error: "",
    loadingLeads: false,
    errorLeads: "",
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
      .addCase(getDataSets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataSets.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.dataSets = action.payload;
        }
      })
      .addCase(getDataSets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getLeadFilterByDataSetId.pending, (state) => {
        state.loadingLeads = true;
      })
      .addCase(getLeadFilterByDataSetId.fulfilled, (state, action) => {
        state.loadingLeads = false;
        if (action.payload) {
          state.leadFilter = action.payload;
        }
      })
      .addCase(getLeadFilterByDataSetId.rejected, (state, action) => {
        state.loadingLeads = false;
        state.errorLeads = action.error.message;
      })
      .addCase(getLeads.pending, (state) => {
        state.loadingLeads = true;
      })
      .addCase(getLeads.fulfilled, (state, action) => {
        state.loadingLeads = false;
        if (action.payload) {
          state.leads = action.payload;
        }
      })
      .addCase(getLeads.rejected, (state, action) => {
        state.loadingLeads = false;
        state.errorLeads = action.error.message;
      });
  },
});

export const {} = leadDataSlice.actions;
export default leadDataSlice.reducer;
