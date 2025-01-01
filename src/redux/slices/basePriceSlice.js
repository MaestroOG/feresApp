import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseData: null,
  location: null,
  formatedAddress : null
};

const baseData = createSlice({
    name: "baseData",
    initialState,
    reducers: {
        setBaseData: (state, action) => {
            state.baseData = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setFormatedAddress: (state, action) => {
            state.formatedAddress = action.payload;
        },
    },
});

export const { setBaseData, setLocation,setFormatedAddress } = baseData.actions;
export default baseData.reducer;
