import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../../../api/login";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { getState, dispatch }) => {
    try {
      const response = await loginAPI(data);
      if (response.status !== 200) {
        const msg = response.data.messgae || "Login Failed";
        throw new Error(msg);
      }

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, { getState, dispatch }) => {
    try {
      const response = await registerAPI(data);
      if (response.status !== 201) {
        const msg = response.data.messgae || "Registration Failed";
        throw new Error(msg);
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    tokens: {},
    profile: {},
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
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.tokens = action.payload.tokens;
          state.user = action.payload.user;
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
     
        if (action.payload) {
          
          state.tokens = action.payload.tokens;
          state.user = action.payload.user;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
