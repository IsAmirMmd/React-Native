import { useSelector, useDispatch } from "react-redux";
import buyIceCream from "../redux/IceCream/IceCreamActions";
const IceCreamContainer = (props) => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>num of IceCream - {numOfIceCream}</h3>
      <button onClick={() => dispatch(buyIceCream())}>buy 1</button>
    </div>
  );
};

export default IceCreamContainer;
