// src/slices/foodSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        addFoodItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeFoodItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addFoodItem, removeFoodItem } = foodSlice.actions;
export default foodSlice.reducer;
