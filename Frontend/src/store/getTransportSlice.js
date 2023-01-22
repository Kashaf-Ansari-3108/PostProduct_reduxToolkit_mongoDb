import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const getTransportSlice = createSlice({
  name: "getTransport",
  initialState: {
    data: [],
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getTransport.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getTransport.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(getTransport.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = getTransportSlice;

const getTransport = createAsyncThunk("getTransport", async () => {
//   console.log("objtosend",obj);

  const transport = await axios.get("https://rose-raven-fez.cyclic.app/api/transports");
//    console.log("transport",transport.data);
  return transport.data;
});

export { getTransport, reducer as getTransportSlice };

