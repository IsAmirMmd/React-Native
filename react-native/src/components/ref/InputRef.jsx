import React, { useEffect, useRef, useState } from "react";
const InputRef = () => {
  const [value, setValue] = useState("");
  //   useRef() stores the previous data
  const refInput = useRef();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  useEffect(() => {
    refInput.current = value;
  }, [value]);

  const resethandler = () => {
    setValue("");
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={refInput}
        value={value}
        onChange={(e) => changeHandler(e)}
      />
      <button onClick={resethandler}>RESET</button>
      <h2>
        my name is {value} and was {refInput.current}
      </h2>
    </div>
  );
};

export default InputRef;
