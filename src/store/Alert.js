import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertCard: {
    show: false,
    message: "",
  },
};

const AlertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.alert.show = true;
      state.alert.message = action.payload;
    },
    hideAlert: (state, action) => {
      state.alert.show = false;
      state.alert.message = "";
    },
  },
});

export const { showAlert, hideAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
