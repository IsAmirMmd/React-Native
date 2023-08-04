import React, { useState } from "react";

export default function FilterList({ names }) {
  const [query, setQuery] = useState("");

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} value={query} />
      <div>
        {names.map((name, i) => {
          <ListItem key={i} name={name} highlight={query} />;
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
