import { useEffect, useState } from "react";
const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // if [count] changes it will update and rerender
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
    </div>
  );
};

export default FunctionalCounter;
