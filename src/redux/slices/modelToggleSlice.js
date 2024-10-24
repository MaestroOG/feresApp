import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModel: false,
};

const modelToggleSlice = createSlice({
  name: "modelToggle",
  initialState,
  reducers: {
    setShowModel: (state, action) => {
      state.showModel = action.payload;
    },
  },
});

export const { setShowModel } = modelToggleSlice.actions;

export default modelToggleSlice.reducer;
