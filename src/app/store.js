import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "../features/global/globalSlices";
import productsSlice from "../features/products/productsSlice";
import singleProductSlices from "../features/product/singleProductSlices";

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    products: productsSlice,
    product: singleProductSlices,
  },
});
