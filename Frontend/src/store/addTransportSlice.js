import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const addTransportSlice = createSlice({
  name: "addTransport",
  initialState: {
    data: {},
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(addTransport.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(addTransport.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(addTransport.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = addTransportSlice;

const addTransport = createAsyncThunk("addTransport", async (obj) => {
//   console.log("objtosend",obj);

  const transport = await axios.post(
    "https://rose-raven-fez.cyclic.app/api/transport",
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

export { addTransport, reducer as addTransportSlice };
