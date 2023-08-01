import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ],
};
const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      });
    },
    toggleCompleted: (state, action) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodo: (state, action) => {
      const selectedTodos = state.todos.filter(
        (t) => t.id !== action.payload.id
      );
      state.todos = selectedTodos;
    },
  },
});

export const { toggleCompleted, addTodo, deleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
