import { createSlice } from "@reduxjs/toolkit";
const storedResturant = JSON.parse(localStorage.getItem("selectedResturant")) 

const initialState = {
  selectedResturant: storedResturant || null,
  supportItem : null
};

const selectedResturantSlice = createSlice({
  name: "selectedResturant",
  initialState,
  reducers: {
    setSelectedResturant: (state, action) => {
      state.selectedResturant = action.payload;
      localStorage.setItem("selectedResturant", JSON.stringify(action.payload))
    },
    setSupportItem : (state, action)=>{
      state.supportItem = action.payload;
    }
  },
});

export const { setSelectedResturant,setSupportItem } = selectedResturantSlice.actions;

export default selectedResturantSlice.reducer;
