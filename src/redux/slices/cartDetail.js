import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDetails: null,
  cartItemData: null,
};

const cartDetails = createSlice({
  name: "cartDetails",
  initialState,
  reducers: {
    setCartDetails: (state, action) => {
      state.cartDetails = action.payload;
    },
    setCartItemData: (state, action) => {
      state.cartItemData = action.payload;
    },
  },
});

export const { setCartDetails, setCartItemData } = cartDetails.actions;

export default cartDetails.reducer;
