import { createSlice } from "@reduxjs/toolkit";


const updateValuesSlice = createSlice({
  name: "update_values",
  initialState: {
    title: "",
    price: "",
    category: "",
    
  },
  reducers: {
    title(state, action) {
      return {
        ...state,
        title: action.payload,
      };
    },
    price(state, action) {
      return {
        ...state,
        price: action.payload,
      };
    },
    category(state, action) {
      return {
        ...state,
        category: action.payload,
      };
    },
   
  },
});

const { actions, reducer } = updateValuesSlice;
const { title, price, category } = actions;
export { title, price, category, reducer as updateValuesSlice };
