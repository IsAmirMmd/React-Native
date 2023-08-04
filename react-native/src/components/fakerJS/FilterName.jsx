import React, { useState, useTransition } from "react";

export default function FilterList({ names }) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [highlight, setHighlight] = useState("");

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => {
      setHighlight(value);
    });
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} value={query} />
      <div style={{ opacity: isPending ? 0.2 : 1 }}>
        {names.map((name, i) => {
          return <ListItem key={i} name={name} highlight={highlight} />;
        })}
      </div>
    </div>
  );
}
function ListItem({ name, highlight }) {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <div>{name}</div>;
  }
  return (
    <div>
      {name.slice(0, index)}
      <span className="highlight">
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
}
