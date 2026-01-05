import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  products: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //   state.product = action.payload;
      const exist = state.products.find(
        (items) => items.id === action.payload.id
      );
      // maybe action.payload.id instead of product.id
      if (exist) {
        exist.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (items) => items.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const items = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (items) {
        items.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const items = state.products.find((item) => item.id === action.payload);
      if (items && items.quantity > 1) {
        items.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
