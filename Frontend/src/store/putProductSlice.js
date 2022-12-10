import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const putProductSlice = createSlice({
  name: "put_product",
  initialState: {
    data: {},
    status: STATUSES,
  },
  extraReducers: (builder) => {
    builder.addCase(putData.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(putData.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(putData.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = putProductSlice;

const putData = createAsyncThunk("putData", async (data) => {
  const config = {
    method: "put",
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

export { putData, reducer as putProductSlice };
