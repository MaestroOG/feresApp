import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    options: {
        rating: false,
        newMerchants: false,
        delivery_time: false,
        cuisines: []
    },
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleRating: (state) => {
            state.options.rating = !state.options.rating;
        },
        toggleNewMerchants: (state) => {
            state.options.newMerchants = !state.options.newMerchants;
        },
        toggleDeliveryTime: (state) => {
            state.options.delivery_time = !state.options.delivery_time;
        },
        addCuisine: (state, action) => {
            const cuisineId = action.payload;
            if (!state.options.cuisines.includes(cuisineId)) {
                state.options.cuisines.push(cuisineId);
            }
        },
        removeCuisine: (state, action) => {
            const cuisineId = action.payload;
            state.options.cuisines = state.options.cuisines.filter(
                (id) => id !== cuisineId
            );
        },
        setOption: (state, action) => {
            const { key, value } = action.payload;
            if (key in state.options) {
                state.options[key] = value;
            }
        }
    }
});

export const {
    toggleRating,
    toggleNewMerchants,
    toggleDeliveryTime,
    addCuisine,
    removeCuisine,
    setOption
} = filterSlice.actions;

export default filterSlice.reducer;
