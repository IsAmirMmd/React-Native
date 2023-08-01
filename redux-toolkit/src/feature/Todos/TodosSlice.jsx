import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: false },
];
const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      });
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { decrement, addTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
