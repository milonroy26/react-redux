import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState,

  // Reducers
  reducers: {
    increment(state, action) {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value++;
    },
    decrement(state, action) {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value--;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
