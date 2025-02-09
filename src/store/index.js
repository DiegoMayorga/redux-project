// Aqui pondre la logica del Redux. Cree una carpeta store y alli almaceno este archivo.
// Creare el store y el reducer.

import { createStore } from "redux";

const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  /* 1. if (action.type === "increaseby5") {
    return {
      counter: state.counter + 5,
    }
  } */

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
