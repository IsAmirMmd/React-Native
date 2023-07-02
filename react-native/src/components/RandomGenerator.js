import React, { useState } from "react";
const RandomGene = () => {
  const [item, setItem] = useState([]);

  const clickHandle = () => {
    // the short hand of this method ↓
    
    // setItem([
    //   ...item,
    //   { number: Math.floor(Math.random() * 10), id: item.length },
    // ]);

    // the longer but easier to get ↓
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };
    const updatedItem = [...item, addedItem];
    setItem(updatedItem);
  };
  return (
    <div>
      <button onClick={clickHandle}>Generate</button>
      {item.map(item => {
        return <li key={item.id}>{item.number}</li>
      })}
    </div>
  );
};

export default RandomGene;
