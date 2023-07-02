import { useState } from "react";
const HooksCounter = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((prevCounter) => prevCounter + 1);
  };
  return (
    <div>
      <h2>hook count is : {count}</h2>
      <button onClick={clickHandler}>increase</button>
    </div>
  );
};

export default HooksCounter;
