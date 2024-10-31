import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedService: null,
};

const selectedService = createSlice({
  name: "selectedService",
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
});

export const { setSelectedService } = selectedService.actions;

export default selectedService.reducer;
