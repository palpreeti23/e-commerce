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
      state.alertCard.show = true;
      state.alertCard.message = action.payload.message;
    },
    hideAlert: (state, action) => {
      state.alertCard.show = false;
      state.alertCard.message = "";
    },
  },
});

export const { showAlert, hideAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
