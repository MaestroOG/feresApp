// src/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // Item exists, so update the quantity
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        // New item, add it to the cart with the quantity
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Optional: You could add a separate action for updating the quantity directly
    updateQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
