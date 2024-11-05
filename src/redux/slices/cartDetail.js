import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDetails: null,
};

const cartDetails = createSlice({
  name: "cartDetails",
  initialState,
  reducers: {
    setCartDetails: (state, action) => {
      state.cartDetails = action.payload;
    },
  },
});

export const { setCartDetails } = cartDetails.actions;

export default cartDetails.reducer;
