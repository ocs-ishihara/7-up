import { createSlice } from '@reduxjs/toolkit';

// Stateの初期状態
const initialState = {
  value: 0
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => ({ value: state.value + 1 }),
    decrement: state => ({ value: state.value - 1 }),
  }
});

// 個別でも使えるようにActionCreatorsをエクスポートしておく
export const { increment, decrement } = counter.actions;

export default counter;
