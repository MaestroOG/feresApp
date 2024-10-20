// src/slices/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        placeOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        cancelOrder: (state, action) => {
            state.orders = state.orders.filter(
                (order) => order.id !== action.payload
            );
        },
    },
});

export const { placeOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
