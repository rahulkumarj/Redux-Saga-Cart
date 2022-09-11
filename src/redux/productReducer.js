import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./actionTypes";

export const productData = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return [action.payload, ...state];

    case SET_PRODUCT_LIST:
      return [...action?.data];

    //   here we have to use spread operator to pass value in array !imp

    default:
      return state;
  }
};

