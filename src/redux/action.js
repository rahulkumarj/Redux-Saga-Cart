// Actions are the plain function
// Get Data from React js
// Send data to reducer after process
// Must have type key in return Statement
// Must sync types with Reducer

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./actionTypes";

export const AddtoCart = (data) =>{
return {
    type: ADD_TO_CART, // This is must to have  these are used to link with reducers
    payload: data,
    // if key and value is same then statement 11 can be written as
    // data
  };
};
// Saga will also initiate from actions

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};
export const emptyCart = (data) => {
  return {
    type: EMPTY_CART,
    payload: data,
  };
};
