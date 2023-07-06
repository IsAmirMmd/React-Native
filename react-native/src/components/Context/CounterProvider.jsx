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

// some tip :
// 1. for make the app more effecient you can use function and export them
// 2. ex=> export const useCount  = () => useContext(CounterContext)
// 3. and then import it in another files
