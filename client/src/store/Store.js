import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import FilterReducer from "./CategorySlice";
import WishListReducer from "./WishListSlice";
import userReducer from "./UserSlice";
import alertReducer from "./Alert";
import themeReducer from "./ThemeSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    filter: FilterReducer,
    wishlist: WishListReducer,
    user: userReducer,
    alert: alertReducer,
    theme: themeReducer,
  },
});

export default store;
