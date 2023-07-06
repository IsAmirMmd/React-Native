import { useReducer } from "react";

// the old method

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "addOne":
//       return state + 1;
//     case "costOne":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// new method
const initialState = {
  fisrtCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, fisrtCounter: state.fisrtCounter + action.value };
    case "cost":
      return { ...state, fisrtCounter: state.fisrtCounter + action.value };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  // the old method
  //   return (
  //     <div>
  //       <p>{count}</p>
  //       <button onClick={() => dispatch("costOne")}>cost one</button>
  //       <button onClick={() => dispatch("addOne")}>add one</button>
  //     </div>
  //   );
  // new method ↓
  return (
    <div>
      <p>{count.fisrtCounter}</p>
      <button onClick={() => dispatch({ type: "cost", value: -1 })}>
        cost one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
    </div>
  );
};

export default CounterReducer;
