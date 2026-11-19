import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    item: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    toggleWishList: (state, action) => {
      const exist = state.item.find((items) => items.id === action.payload.id);

      if (exist) {
        state.item = state.item.filter(
          (items) => items.id !== action.payload.id
        );
      } else {
        state.item.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.item));
    },
  },
});

export const { toggleWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
