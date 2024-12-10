import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModel: false,
  newOrderPopup: false,
  paymentMethod: "cash",
};

const modelToggleSlice = createSlice({
  name: "modelToggle",
  initialState,
  reducers: {
    setShowModel: (state, action) => {
      state.showModel = action.payload;
    },
    setNewOrderPopup: (state, action) => {
      state.newOrderPopup = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { setShowModel, setPaymentMethod,setNewOrderPopup } = modelToggleSlice.actions;

export default modelToggleSlice.reducer;
