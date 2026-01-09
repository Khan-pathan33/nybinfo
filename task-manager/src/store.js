import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { completed: 0 },
  reducers: {
    increment: state => { state.completed += 1; },
    decrement: state => { state.completed -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({ reducer: counterSlice.reducer });
