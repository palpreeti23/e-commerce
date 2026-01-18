import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    name: "preeti",
    email: "preeti@gmail.com",
    password: 12345678,
  },
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

    logout: (state, action) => {
      (state.isAuthenticated = false), (state.user = null);
    },
    addAddress: (state, action) => {
      state.address.push(action.payload);
    },
    updateUserName: (state, action) => {
      state.user.name = action.payload;
    },
    updateUserEmail: (state, action) => {
      state.user.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.user.password = action.payload;
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
} = userSlice.actions;
export default userSlice.reducer;
