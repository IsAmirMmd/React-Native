import axios from "axios";
import { useReducer } from "react";

const initialState = {
  error: null,
  data: null,
  loading: false,
};

const actions = {
  fetchSuccess: "FECTH_DATA_SUCCESS",
  fetchError: "FECTH_DATA_ERROR",
  fetchRequest: "FECTH_DATA_REQUEST",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.fetchSuccess: {
    return {...state,}
    }
    default:
      return state;
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>test</div>;
};

export default useFetch;
