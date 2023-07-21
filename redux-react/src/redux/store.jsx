import { createStore } from "redux";
import cakeReducer from "./Cake/CakeReducer";

const store = createStore(cakeReducer);

export default store;
