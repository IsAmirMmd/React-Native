import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter/CounterSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
