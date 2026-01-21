import { createSlice } from "@reduxjs/toolkit";

const storeUser = JSON.parse(localStorage.getItem("user"));
const storeAddress = JSON.parse(localStorage.getItem("address"));

const initialState = {
  isAuthenticated: !!storeUser,
  users: storeUser,
  address: storeAddress || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.users = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
      state.users = null;
      localStorage.removeItem("user");
    },
    addAddress: (state, action) => {
      state.address.push(action.payload);
      localStorage.setItem("address", JSON.stringify(state.address));
    },
    updateUserName: (state, action) => {
      state.users.name = action.payload;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUserEmail: (state, action) => {
      state.users.email = action.payload;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updatePassword: (state, action) => {
      const users = JSON.parse(localStorage.getItem(users));
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
} = userSlice.actions;
export default userSlice.reducer;
