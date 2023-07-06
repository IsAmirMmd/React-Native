import React from "react";
import { CounterContext } from "./CounterProvider";
import { CounterContextDispatcher } from "./CounterProvider";
import { useContext } from "react";

const CounterOne = () => {
  const count = useContext(CounterContext);
  const setCount = useContext(CounterContextDispatcher);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add one</button>
    </div>
  );
};

export default CounterOne;
