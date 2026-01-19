import { createSlice } from "@reduxjs/toolkit";
import products from "../data/Products";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

const saveCart = (products) => {
  localStorage.setItem("cart", JSON.stringify(products));
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exist = state.products.find((items) => items.id === product.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
      saveCart(state.products);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (items) => items.id !== action.payload
      );
      saveCart(state.products);
    },

    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCart(state.products);
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
      saveCart(state.products);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
