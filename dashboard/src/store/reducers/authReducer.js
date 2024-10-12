import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";

export let admin_login = createAsyncThunk(
  "auth/admin_login",
  async (adminInfo, { rejectWithValue, fulfillWithValue }) => {
    console.log("admin info reducer", adminInfo);

    try {
      let { data } = await api.post("/admin-login", adminInfo, {
        withCredentials: true,
      });

      return fulfillWithValue(data);

    } catch (error) {

      return rejectWithValue(error.response.data);
      
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    clearMessage: (state, action) => {
      state.errorMessage = "";
      state.successMessage =""
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message
       
      })
      
  },
});

export const { clearMessage } = authReducer.actions;

export default authReducer.reducer;
