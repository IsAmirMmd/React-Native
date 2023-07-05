import withCounter from "./withCounter";

const hoverCounter = ({ count, incremenentNumber }) => {
  return (
    <div>
      <h2 onMouseOver={incremenentNumber}>hover counter {count}</h2>
    </div>
  );
};

export default withCounter(hoverCounter, 10);
