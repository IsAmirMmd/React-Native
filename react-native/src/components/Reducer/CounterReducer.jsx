import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "costOne":
      return state - 1;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("costOne")}>cost one</button>
      <button onClick={() => dispatch("addOne")}>add one</button>
    </div>
  );
};

export default CounterReducer;
