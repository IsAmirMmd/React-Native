import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter/CounterSlice";
import TodosReducer from "./Todos/TodosSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todos: TodosReducer,
  },
});
