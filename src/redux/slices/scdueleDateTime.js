import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
  selectedTime: null,
  
};

const schecduleOrder = createSlice({
  name: "schecduleOrder",
  initialState,
  reducers: {
    setSchSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSchSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    } 
  },
});

export const { setSchSelectedDate,setSchSelectedTime } = schecduleOrder.actions;

export default schecduleOrder.reducer;
