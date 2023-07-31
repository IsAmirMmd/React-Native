import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const ParentComponent = () => {
  const [score, setScore] = useState(0);
  const [age, setAge] = useState(0);

  function ageHandler() {
    setAge(age + 1);
  }

  function scoreHandler() {
    setScore(score + 1);
  }

  return (
    <div>
      <Count text="age" count={age} />
      <Button clickHandler={ageHandler}>age ++</Button>

      <Count text="score" count={score} />
      <Button clickHandler={scoreHandler}>score ++</Button>
    </div>
  );
};

export default ParentComponent;
