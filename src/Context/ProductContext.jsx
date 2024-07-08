import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS, API } from "../utills/consts";

export const productContext = createContext();
export function useProductContext() {
  return useContext(productContext);
}

const initState = {
  answer: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.answer:
      return { ...state, answer: action.payload };
    default:
      return state;
  }
}

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getAns() {
    const { data } = await axios.get(API);

    dispatch({
      type: ACTIONS.answer,
      payload: data,
    });
  }

  async function addAns(newAns) {
    await axios.post(API, newAns);

    getAns();
  }

  const value = {
    answer: state.answer,
    getAns: getAns,
    getAns,
    addAns,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
