const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

const initialState = {
  numOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

const store = createStore(reducer);

store.dispatch(buyCake());

console.log("init state", store.getState());
