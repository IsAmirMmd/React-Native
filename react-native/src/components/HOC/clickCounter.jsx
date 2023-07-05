import withCounter from "./withCounter";

const clikcCounter = ({ count, incremenentNumber }) => {
  return (
    <div>
      <p onClick={incremenentNumber}>click counter {count}</p>
    </div>
  );
};

export default withCounter(clikcCounter, 5);
