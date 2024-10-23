// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/userAuthSlice";
import foodReducer from "./slices/foodSlice";
import orderReducer from "./slices/orderSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    food: foodReducer,
    orders: orderReducer,
    search: searchReducer,
  },
});

export default store;
