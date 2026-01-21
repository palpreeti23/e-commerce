import { createSlice } from "@reduxjs/toolkit";

const orderedItem = JSON.parse(localStorage.getItem("orders")) || [];

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
  orders: orderedItem,
  buyNow: JSON.parse(localStorage.getItem("buyNowItem")) || null,
  payment: JSON.parse(localStorage.getItem("payment")) || null,
};

const saveCart = (products) => {
  localStorage.setItem("cart", JSON.stringify(products));
};

const saveBuyNow = (product) => {
  localStorage.setItem("buyNowItem", JSON.stringify(product));
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

    setBuyNow: (state, action) => {
      state.buyNow = { ...action.payload, quantity: 1 };
      saveBuyNow(state.buyNow);
    },

    increaseQntInBuy: (state, action) => {
      if (state.buyNow) {
        state.buyNow.quantity += 1;
        saveBuyNow(state.buyNow);
      }
    },

    decreaseQntInBuy: (state, action) => {
      if (state.buyNow && state.buyNow.quantity > 1) {
        state.buyNow.quantity -= 1;
        saveBuyNow(state.buyNow);
      }
    },
    removeBuyNow: (state, action) => {
      state.buyNow = null;
      saveBuyNow(state.buyNow);
    },
    placeOrder: (state, action) => {
      if (!state.buyNow) return;

      state.orders.push({
        id: Date.now(),
        items: [state.buyNow],
        total: state.buyNow.price * state.buyNow.quantity,
        createdAt: new Date().toISOString(),
      });

      state.products = state.products.filter((items) => {
        items.id !== action.payload;
      });

      saveCart(state.products);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    setPayment: (state, action) => {
      state.payment = action.payload;
      localStorage.setItem("payment", JSON.stringify(action.payload));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setBuyNow,
  removeBuyNow,
  placeOrder,
  increaseQntInBuy,
  decreaseQntInBuy,
  setPayment,
} = CartSlice.actions;
export default CartSlice.reducer;
