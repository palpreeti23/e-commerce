import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertCard: {
    show: false,
    type: "",
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
      state.alertCard.type = action.payload.type;
    },
    hideAlert: (state, action) => {
      state.alertCard.show = false;
      state.alertCard.message = "";
      state.alertCard.type = "";
    },
  },
});

export const { showAlert, hideAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
