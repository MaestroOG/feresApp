import { createSlice } from "@reduxjs/toolkit";
const storedResturant = JSON.parse(localStorage.getItem("selectedResturant")) 

const initialState = {
  selectedResturant: storedResturant || null,
};

const selectedResturantSlice = createSlice({
  name: "selectedResturant",
  initialState,
  reducers: {
    setSelectedResturant: (state, action) => {
      state.selectedResturant = action.payload;
      localStorage.setItem("selectedResturant", JSON.stringify(action.payload))
    },
  },
});

export const { setSelectedResturant } = selectedResturantSlice.actions;

export default selectedResturantSlice.reducer;
