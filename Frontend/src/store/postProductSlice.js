import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const postProductSlice = createSlice({
  name: "post_product",
  initialState: {
    data: {},
    status: STATUSES,
  },
  extraReducers: (builder) => {
    builder.addCase(postData.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(postData.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = postProductSlice;

const postData = createAsyncThunk("postData", async (data) => {
  const config = {
    method: "post",
    url: "http://localhost:5000/api/product",
    data: data,
  };

  const response = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("Check", response.data);
  return response.data;
});

export { postData, reducer as postProductSlice };
