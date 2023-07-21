import BUY_ICECREAM from "./IceCreamTypes";

const initialIceCream = {
  numOfIceCream: 15,
};

const IceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};

export default IceCreamReducer;
