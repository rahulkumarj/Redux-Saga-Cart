import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleWare],
  //   we may have more middle wares
});
// we have to include reducer keyword  here if we are using configure store

sagaMiddleWare.run(productSaga);
export default store;

// ************************with redux we have to do this*********************************

// import { createStore } from "redux";
// import rootReducer from "./rootReducer";

// // We have to include rootReducer to include reducer in our main app

// const store = createStore(rootReducer); // createStore requrire a function so we have to declare another function dummyfunction

// export default store;
