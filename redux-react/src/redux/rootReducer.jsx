import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});

export default rootReducer;
