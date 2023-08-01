import logo from "./logo.svg";
import "./App.css";
import { store } from "./feature/store";
import { Provider } from "react-redux";
import CounterComponent from "./components/counter";
import AddTodoForm from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TodoCompleted";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CounterComponent /> */}
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
