import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Count from "./Count";

const ParentComponent = () => {
  const [score, setScore] = useState(0);
  const [age, setAge] = useState(0);

  const [amount, setAmount] = useState(0);

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const scoreHandler = useCallback(() => {
    setScore(score + 1);
  }, [score]);

  const isOddAmount = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return amount % 2 === 1;
  }, [amount]);

  return (
    <div>
      <Count text="age" count={age} />
      <Button clickHandler={ageHandler}>age ++</Button>

      <Count text="score" count={score} />
      <Button clickHandler={scoreHandler}>score ++</Button>

      <Count text="amount" count={amount} />
      <Button clickHandler={() => setAmount(amount + 1)}>amount ++</Button>
      <p>{isOddAmount ? "odd" : "evem"}</p>
    </div>
  );
};

export default ParentComponent;
