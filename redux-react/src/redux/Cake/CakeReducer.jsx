import BUY_CAKE from "./CakeTypes";

const initialCake = {
  numOfCake: 10,
};

const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.cake.numOfCake - 1 };
    default:
      return state;
  }
};

export default cakeReducer;
