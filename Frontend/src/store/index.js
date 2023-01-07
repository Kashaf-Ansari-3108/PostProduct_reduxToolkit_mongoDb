import { configureStore } from "@reduxjs/toolkit";
import { addTransportSlice } from "./addTransportSlice";
import { deleteTransportSlice } from "./deleteTransportSlice";
import { getTransportSlice } from "./getTransportSlice";
import { loginSlice } from "./loginSlice";
import { signupSlice } from "./signupSlice";
import { updateTransportSlice } from "./updateTransportSlice";



const store = configureStore({
  reducer: {
   signupSlice:signupSlice,
   loginSlice:loginSlice,
   getTransportSlice:getTransportSlice,
   addTransportSlice:addTransportSlice,
   deleteTransportSlice:deleteTransportSlice,
   updateTransportSlice:updateTransportSlice,
   
  },
});
export default store;
