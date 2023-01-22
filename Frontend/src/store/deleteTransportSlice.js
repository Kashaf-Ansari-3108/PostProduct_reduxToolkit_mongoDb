import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const deleteTransportSlice = createSlice({
  name: "deleteTransport",
  initialState: {
    data: {},
    status: "",
  },
  extraReducers: (builder) => {
    builder.addCase(deleteTransport.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(deleteTransport.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(deleteTransport.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = deleteTransportSlice;

const deleteTransport = createAsyncThunk("deleteTransport", async (id) => {
    console.log(id);
   
  const transport = await axios.delete(
    `https://rose-raven-fez.cyclic.app/api/transport/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
   console.log("transport",transport.data);
  return transport.data;
});

export { deleteTransport, reducer as deleteTransportSlice };
