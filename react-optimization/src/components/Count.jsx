import React from "react";

const Count = ({ text, count }) => {
  console.log("count rendering ", text);

  return (
    <p>
      {text} - {count}
    </p>
  );
};

export default React.memo(Count);
