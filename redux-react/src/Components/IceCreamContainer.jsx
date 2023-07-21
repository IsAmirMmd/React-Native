import { useSelector, useDispatch } from "react-redux";
import buyIceCream from "../redux/IceCream/IceCreamActions";
import { useState } from "react";

const IceCreamContainer = (props) => {
  const [number, setNumber] = useState(1);

  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>num of IceCream - {numOfIceCream}</h3>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyIceCream(number))}>
        buy {number}
      </button>
    </div>
  );
};

export default IceCreamContainer;
