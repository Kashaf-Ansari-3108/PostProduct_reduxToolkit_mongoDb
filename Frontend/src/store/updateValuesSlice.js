import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const updateValuesSlice = createSlice({
  name: "update_values",
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

const { actions, reducer } = updateValuesSlice;
const { title, price, category, imgSrc } = actions;
export { title, price, category, imgSrc, reducer as updateValuesSlice };
