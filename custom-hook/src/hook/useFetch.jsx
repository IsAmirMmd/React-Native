import axios from "axios";
import { useEffect, useReducer } from "react";

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
      return { ...state, loading: false, error: null, data: action.payload };
    }
    case actions.fetchRequest: {
      return { ...state, loading: true, error: null, data: null };
    }
    case actions.fetchError: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    }
    default:
      return state;
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actions.fetchRequest });

    axios
      .get(url)
      .then((res) => {
        dispatch({ type: actions.fetchSuccess, payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: actions.fetchError, payload: err.message });
      });
  }, [url]);

  return state;
};

export default useFetch;
