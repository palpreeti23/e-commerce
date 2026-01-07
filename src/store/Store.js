import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import FilterReducer from "./CategorySlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    filter: FilterReducer,
  },
});

export default store;
