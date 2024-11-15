import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModel: false,
  paymentMethod: "cash",
};

const modelToggleSlice = createSlice({
  name: "modelToggle",
  initialState,
  reducers: {
    setShowModel: (state, action) => {
      state.showModel = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { setShowModel, setPaymentMethod } = modelToggleSlice.actions;

export default modelToggleSlice.reducer;
