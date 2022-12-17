import { configureStore } from "@reduxjs/toolkit";
import { deleteProductSlice } from "./deleteProductSlice";
import { postProductSlice } from "./postProductSlice";
import { productSlice } from "./productSlice";
import { productsSlice } from "./productsSlice";
import { putProductSlice } from "./putProductSlice";


const store = configureStore({
  reducer: {
    products: productsSlice,
    getProducts: productSlice,
    postProduct: postProductSlice,
    deleteProduct: deleteProductSlice,
    putProduct: putProductSlice,
   
  },
});
export default store;
