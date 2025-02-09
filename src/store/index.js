// Aqui pondre la logica del Redux. Cree una carpeta store y alli almaceno este archivo.
// Creare el store y el reducer.

import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  /* 1. if (action.type === "increaseby5") {
    return {
      counter: state.counter + 5,
    }
  } */

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
