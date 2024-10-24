import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFood: null,
};

const selectedFoodSlice = createSlice({
  name: "selectedFood",
  initialState,
  reducers: {
    setSelectedFood: (state, action) => {
      state.selectedFood = action.payload;
    },
  },
});

export const { setSelectedFood } = selectedFoodSlice.actions;

export default selectedFoodSlice.reducer;
