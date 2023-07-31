const Button = ({ children, clickHandler }) => {
  console.log("button rendering ", children);
  return <button onClick={clickHandler}>{children}</button>;
};

export default Button;

// in this situation the all of components will render after naother component modified ↑
