import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("theme") || "light",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    ToggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { ToggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
