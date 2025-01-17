// src/slices/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedLocation : null,
    currentLocation : null
};

const locations = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setSavedLocation: (state, action) => {
            state.savedLocation = action.payload;
        },
        setCurrentLocation: (state, action) => {
            state.currentLocation = action.payload;
        }
    },
});

export const { setSavedLocation, setCurrentLocation } = locations.actions;
export default locations.reducer;
