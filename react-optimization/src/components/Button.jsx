import React from "react";

const Button = ({ children, clickHandler }) => {
  console.log("button rendering ", children);
  return <button onClick={clickHandler}>{children}</button>;
};

export default React.memo(Button);

// in this situation the all of components will render after naother component modified ↑
