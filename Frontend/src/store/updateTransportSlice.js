import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const updateTransportSlice = createSlice({
  name: "updateTransport",
  initialState: {
    data: {},
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(updateTransport.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(updateTransport.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(updateTransport.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = updateTransportSlice;

const updateTransport = createAsyncThunk("updateTransport", async (obj) => {
//   console.log("objtosend",obj);

  const transport = await axios.put(
    "http://localhost:5000/api/transport",
    obj,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
//    console.log("transport",transport.data);
  return transport.data;
});

export { updateTransport, reducer as updateTransportSlice };