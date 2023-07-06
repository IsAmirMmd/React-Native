import React, { useState } from "react";

export const CounterContext = React.createContext(); // state
export const CounterContextDispatcher = React.createContext(); // set state

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
