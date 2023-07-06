import React from "react";
import { CounterContext, useCountAction } from "./CounterProvider";
import { useContext } from "react";

const CounterOne = () => {
  const count = useContext(CounterContext);
  const dispatch = useCountAction();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
        decrease one
      </button>
    </div>
  );
};

export default CounterOne;
