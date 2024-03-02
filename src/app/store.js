import { configureStore } from "@reduxjs/toolkit";
import countersSlice from "../features/counters/countersSlice";

const store = configureStore({
  reducer: {
    // Add reducers here
    counters: countersSlice,
  },
});

export default store;
