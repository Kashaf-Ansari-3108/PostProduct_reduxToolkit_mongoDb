import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    data: {},
    status:"",
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = signupSlice;

const signupUser = createAsyncThunk("signupUser", async (obj) => {
  // console.log("objtosend",obj);
    
   const user = await axios.post("https://rose-raven-fez.cyclic.app/api/signup", obj)
  //  console.log("user",user.data);
   return user.data;
   
});

export { signupUser, reducer as signupSlice };
