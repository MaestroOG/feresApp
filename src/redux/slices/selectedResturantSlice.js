import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedResturant: null,
};

const selectedResturantSlice = createSlice({
  name: "selectedResturant",
  initialState,
  reducers: {
    setSelectedResturant: (state, action) => {
      state.selectedResturant = action.payload;
    },
  },
});

export const { setSelectedResturant } = selectedResturantSlice.actions;

export default selectedResturantSlice.reducer;
