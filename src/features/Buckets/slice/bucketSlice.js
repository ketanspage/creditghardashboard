import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createDataSetBucketAPI,
  getDataSetBucketByIdAPI,
  getDataSetBucketsAPI,
} from "../../../api/dataSetBucket";
import { getBucketFilterAPI, getBucketsAPI } from "../../../api/bucket";

export const createDataSetBucket = createAsyncThunk(
  "bucket/createBucket",
  async (data, { getState, dispatch }) => {
    try {
      const response = await createDataSetBucketAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getDataSetBuckets = createAsyncThunk(
  "bucket/getDataSetBuckets",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getDataSetBucketsAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getBuckets = createAsyncThunk(
  "bucket/getBuckets",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getBucketsAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getDataSetBucketById = createAsyncThunk(
  "bucket/getDataSetBucketById",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getDataSetBucketByIdAPI(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getBucketFilter = createAsyncThunk(
  "leadData/getBucketFilter",
  async (data, { getState, dispatch }) => {
    try {
      const response = await getBucketFilterAPI(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const bucketSlice = createSlice({
  name: "bucket",
  initialState: {
    buckets: {},
    dataSetBuckets: {},
    dataSetBucketsById: {},
    bucketFilter: {},
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
      .addCase(getBuckets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBuckets.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.buckets = action.payload;
        }
      })
      .addCase(getBuckets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBucketFilter.pending, (state) => {
        state.loadingLeads = true;
      })
      .addCase(getBucketFilter.fulfilled, (state, action) => {
        state.loadingLeads = false;
        if (action.payload) {
          state.bucketFilter = action.payload;
        }
      })
      .addCase(getBucketFilter.rejected, (state, action) => {
        state.loadingLeads = false;
        state.errorLeads = action.error.message;
      })
      .addCase(getDataSetBuckets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataSetBuckets.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.dataSetBuckets = action.payload;
        }
      })
      .addCase(getDataSetBuckets.rejected, (state, action) => {
        state.loading = false;
        state.errorLeads = action.error.message;
      })
      .addCase(getDataSetBucketById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataSetBucketById.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.dataSetBucketsById = action.payload;
        }
      })
      .addCase(getDataSetBucketById.rejected, (state, action) => {
        state.loading = false;
        state.errorLeads = action.error.message;
      });
  },
});

export const {} = bucketSlice.actions;
export default bucketSlice.reducer;
