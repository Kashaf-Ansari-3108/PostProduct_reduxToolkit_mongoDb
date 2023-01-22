import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: {},
    status:"",
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = loginSlice;

const loginUser = createAsyncThunk("loginUser", async (obj) => {
  // console.log("objtosend",obj);
    
   const user = await axios.post("https://rose-raven-fez.cyclic.app/api/login", obj)
//    console.log("user",user.data);
   return user.data;
   
});

export { loginUser, reducer as loginSlice };
