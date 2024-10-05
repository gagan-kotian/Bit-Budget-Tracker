import React from "react";

function expenseReducer(state, actions) {
  switch (actions.type) {
    case "ADD":
      return [...state, actions.payload];
    case "REMOVE":
      return state.filter((_, i) => actions.payload === i + 1);
    default:
      return state;
  }
}

export default expenseReducer;
