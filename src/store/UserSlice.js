import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const storeUser = JSON.parse(localStorage.getItem("users"));
const storeAddress = JSON.parse(localStorage.getItem("address"));
const authUser = JSON.parse(localStorage.getItem("user"));

const storeUserArray = storeUser
  ? Array.isArray(storeUser)
    ? storeUser
    : [storeUser] // wrap single object in array
  : [];

const initialState = {
  isAuthenticated: !!authUser,
  user: authUser,
  users: storeUserArray,
  address: storeAddress || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.users = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    addAddress: (state, action) => {
      state.address.push(action.payload);
      localStorage.setItem("address", JSON.stringify(state.address));
    },
    updateUserName: (state, action) => {
      state.user.name = action.payload;
      localStorage.setItem("users", JSON.stringify(state.user));
    },
    updateUserEmail: (state, action) => {
      state.user.email = action.payload;
      localStorage.setItem("users", JSON.stringify(state.user));
    },
    updatePassword: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users"));
      const findUser = users.find((useremail) =>
        useremail.email === state.users.email
          ? { ...useremail, password: action.payload }
          : useremail
      );

      localStorage.setItem("users", JSON.stringify(findUser));
    },
  },
});

export const {
  login,
  logout,
  updatePassword,
  updateUserEmail,
  updateUserName,
  addAddress,
  addUser,
} = userSlice.actions;
export default userSlice.reducer;
