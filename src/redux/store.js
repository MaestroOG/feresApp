// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/userAuthSlice";
import foodReducer from "./slices/foodSlice";
import orderReducer from "./slices/orderSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
<<<<<<< HEAD
    reducer: {
        userAuth: userAuthReducer,
        food: foodReducer,
        orders: orderReducer,
        search: searchReducer,
    },
=======
  reducer: {
    userAuth: userAuthReducer,
    food: foodReducer,
    orders: orderReducer,
    search: searchReducer,
  },
>>>>>>> origin/date-time-model-fixes
});

export default store;
