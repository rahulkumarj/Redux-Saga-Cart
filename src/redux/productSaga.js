import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./actionTypes";

function* getProducts() {
  let data = yield fetch("https://fakestoreapi.com/products");
  //   here we use yield insted of await
  data = yield data.json();
  console.log("product list is called from saga", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

// generator function is used here because we have to handle async operation
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;
