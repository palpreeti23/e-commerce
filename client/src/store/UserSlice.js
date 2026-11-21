import { createSlice } from "@reduxjs/toolkit";

const storeUser = JSON.parse(localStorage.getItem("users"));
const storeAddress = JSON.parse(localStorage.getItem("address"));
const authUser = JSON.parse(localStorage.getItem("user"));

const storeUserArray = storeUser
  ? Array.isArray(storeUser)
    ? storeUser
    : [storeUser] // wrap single object in array
  : [];

const initialState = {
  isAuthenticated: false,
  user: null,
  address: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },

    addAddress: (state, action) => {
      state.address.push(action.payload);
    },
  },
});
export const { login, logout, addAddress } = userSlice.actions;

export default userSlice.reducer;
