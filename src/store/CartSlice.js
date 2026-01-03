import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product = action.payload;
      const exist = state.product.find((items) => items.id === product.id);
      // maybe action.payload.id instead of product.id
      if (exist) {
        exist.quantity += 1;
      } else {
        state.product.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (items) => items.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
