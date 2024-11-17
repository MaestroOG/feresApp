import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDetails: null,
  cartItemData: null,
  providerInfo: null,
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
    setProviderInfo: (state, action) => {
      state.providerInfo = action.payload;
    },
  },
});

export const { setCartDetails, setCartItemData, setProviderInfo } =
  cartDetails.actions;

export default cartDetails.reducer;
