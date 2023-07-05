import React, { useState } from "react";
const withCounter = (WrappedComponent, increaseValue) => {
  const UpdateComponent = (props) => {
    const [count, setCount] = useState(0);

    const incremenentNumber = () => {
      setCount(count + increaseValue);
    };

    return (
      <WrappedComponent
        count={count}
        incremenentNumber={incremenentNumber}
        {...props}
      />
    );
  };

  return UpdateComponent;
};

export default withCounter;
