import { createSlice } from '@reduxjs/toolkit';

// Stateの初期状態
const initialState = {
  mode: false,
};

const slice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleOn: state => {
      localStorage.setItem("dark", "on");
      return Object.assign({}, state, { mode: true });
    },
    toggleOff: state => {
      localStorage.setItem("dark", "off");
      return Object.assign({}, state, { mode: false });
    },
  }
});

export const { toggleOn, toggleOff } = slice.actions;

export default slice.reducer;
