import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const deleteProductSlice = createSlice({
  name: "delete_product",
  initialState: {
    data: {},
    status: STATUSES,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteData.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(deleteData.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = deleteProductSlice;
const deleteData = createAsyncThunk("deleteData", async (data) => {
  const config = {
    method: "delete",
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

export { deleteData, reducer as deleteProductSlice };
