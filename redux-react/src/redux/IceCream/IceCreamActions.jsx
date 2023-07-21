import BUY_ICECREAM from "./IceCreamTypes";

const buyIceCream = (num = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: num,
  };
};

export default buyIceCream;
