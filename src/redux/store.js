// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/userAuthSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import searchReducer from "./slices/searchSlice";
import selectedResturantReducer from "./slices/selectedResturantSlice";
import modelToggleReducer from "./slices/modelToggleSlice";
import selectedFoodReducer from "./slices/selectedFoodSlice";
import selectedServiceReducer from "./slices/deliveryServiceSlice";
import cartDetailsReducer from "./slices/cartDetail";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    cart: cartReducer,
    orders: orderReducer,
    search: searchReducer,
    selectedResturant: selectedResturantReducer,
    modelToggle: modelToggleReducer,
    selectedFood: selectedFoodReducer,
    selectedService: selectedServiceReducer,
    cartDetails: cartDetailsReducer,
  },
});

export default store;
