// Reducer handle data for the store
// Update data in store
// Rules
// --Need rootReducer
//-- Reducer mmust return the some value
// The reducer must have some initial value
// when we Refresh the page redux data get removed

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./actionTypes";


export const cartData = (state = [], action) => 
{
  switch (action.type) {
    case ADD_TO_CART:
      {
        let  product = state.find(state=> state.id === action.payload.id)
        console.log(product,"product");      

        if(product){
          console.log(product)
          product.qty+=1;
      }
        else return [...state,{...action.payload,qty:1}]
      }   
      // here we have to use spread operator to pass value in array !imp

    case REMOVE_FROM_CART:
      {let  newproduct = state.find((state)=> state.id === action.payload)
      let newArr = state.filter(product=> product.id !== action.payload);
      console.log(newproduct,"newproductqty");
      return [...newArr];
      }

    case EMPTY_CART:
      return [];

    default:
      return state;
  }
};
