// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/userAuthSlice";
import foodReducer from "./slices/foodSlice";
import orderReducer from "./slices/orderSlice";
import servicesReducer from "./slices/servicesSlice";

const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        food: foodReducer,
        orders: orderReducer,
        services: servicesReducer,
    },
});

export default store;
