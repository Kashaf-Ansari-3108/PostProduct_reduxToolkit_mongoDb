import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    title: "",
    price: "",
    category: "",
    imgSrc: "",
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
    imgSrc(state, action) {
      return {
        ...state,
        imgSrc: action.payload,
      };
    },
  },
});

const { actions, reducer } = productsSlice;
const { title, price, category, imgSrc } = actions;
export { title, price, category, imgSrc, reducer as productsSlice };
