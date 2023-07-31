import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";

const ParentComponent = () => {
  const [score, setScore] = useState(0);
  const [age, setAge] = useState(0);

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const scoreHandler = useCallback(()=> {
    setScore(score + 1);
  },[score])

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
