// src/slices/servicesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: [],
};

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        addService: (state, action) => {
            state.services.push(action.payload);
        },
        removeService: (state, action) => {
            state.services = state.services.filter(
                (service) => service.id !== action.payload
            );
        },
    },
});

export const { addService, removeService } = servicesSlice.actions;
export default servicesSlice.reducer;
