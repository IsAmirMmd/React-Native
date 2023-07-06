import React, { useContext, useReducer, useState } from "react";

export const CounterContext = React.createContext(); // state
export const CounterContextDispatcher = React.createContext(); // set state

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrease":
      return state - action.value;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

// some tip :
// 1. for make the app more effecient you can use function and export them
// 2. ex=> export const useCount  = () => useContext(CounterContext)
// 3. and then import it in another files

export const useCountAction = () => {
  return useContext(CounterContextDispatcher);
};
