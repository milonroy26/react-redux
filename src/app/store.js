import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    // Add reducers here
    counters: countersReducer,
    posts: postsReducer,
  },
});

export default store;
