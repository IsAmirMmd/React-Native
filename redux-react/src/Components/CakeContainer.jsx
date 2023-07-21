import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/Cake/CakeActions";

const CakeContainer = (props) => {
  const numOfCake = useSelector((state) => state.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>num of cake - {numOfCake}</h3>
      <button onClick={() => dispatch(buyCake())}>buy 1</button>
    </div>
  );
};

export default CakeContainer;
