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
import filterReducer from './slices/filterSlice'
import faqReducer from "./slices/faqSlice"
import chatReducer from "./slices/chatSlice"

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
    filter: filterReducer,
    faq:faqReducer,
    chat:chatReducer
  },
});

export default store;
