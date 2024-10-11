import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";

export let admin_login = createAsyncThunk(
  "auth/admin_login",
  async (adminInfo) => {
    console.log("admin info reducer", adminInfo);

    try {
      let { data } = await api.post("/admin-login", adminInfo, {
        withCredentials: true,
      });

      console.log(data);
    } catch (error) {
      console.log("error");
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
  reducers: {},
});

export default authReducer.reducer;
