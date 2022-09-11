import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./actionTypes";
export const productList = (data) => {
  // we need to add saga because we have to fetch data asynchronously

  console.log(data, "adata");
  return {
    type: PRODUCT_LIST,
    payload: data,
  };
};
//   export const productList = () => {
//   let data = "apple";
//   return {
//     type: SET_PRODUCT_LIST,
//     payload: data,
//   };
