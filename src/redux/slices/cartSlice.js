import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Check if the item with the same product_id (or sub_product_id) exists in the cart
      const itemIndex = state.items.findIndex(
        (item) => item.product_id === action.payload.product_id
      );

      if (itemIndex >= 0) {
        // If item already exists, update the quantity
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        // If new item, add it to the cart
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeItem: (state, action) => {
      // Remove the item using its product_id (or sub_product_id)
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload.product_id
      );
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.product_id === action.payload.product_id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
