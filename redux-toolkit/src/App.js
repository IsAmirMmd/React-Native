import logo from "./logo.svg";
import "./App.css";
import { store } from "./feature/store";
import { Provider } from "react-redux";
import CounterComponent from "./components/counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
