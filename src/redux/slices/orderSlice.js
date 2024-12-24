// src/slices/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    reportOrder : null
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
        setReportOrder: (state, action) => {
            state.reportOrder = action.payload;
        }
    },
});

export const { placeOrder, cancelOrder, setReportOrder } = orderSlice.actions;
export default orderSlice.reducer;
