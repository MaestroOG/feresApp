import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item_info: null,
    product_info:null,
    store_info:null,
    promoPer:null
};

const promotions = createSlice({
  name: "promotions",
  initialState,
  reducers: {
    setItem_info: (state, action) => {
      state.item_info = action.payload;
    },
    setProduct_info: (state, action) => {
        state.product_info = action.payload;
      },
      setStore_info: (state, action) => {
        state.store_info = action.payload;
      },
      setPromoPer: (state, action) => {
        state.promoPer = action.payload;
      },

  },
});

export const { setStore_info,setProduct_info,setItem_info,setPromoPer } = promotions.actions;

export default promotions.reducer;
