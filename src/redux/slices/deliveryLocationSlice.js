import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current : null,
  destination: null,
};

const deliveryLocation = createSlice({
    name: "deliveryLocation",
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        }
    },
});

export const { setCurrent, setDestination } = deliveryLocation.actions;
export default deliveryLocation.reducer;
