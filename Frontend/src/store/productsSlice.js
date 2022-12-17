import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
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

const { actions, reducer } = productsSlice;
const { title, price, category } = actions;
export { title, price, category, reducer as productsSlice };
