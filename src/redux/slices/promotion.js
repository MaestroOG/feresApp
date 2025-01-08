import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item_info: null,
  product_info: null,
  store_info: null,
  promoPer: null,
  category_info: null,
  allPromo: null,
  promo_id: null,
  
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
    setCategory_info: (state, action) => {
      state.category_info = action.payload;
    },
    setPromoPer: (state, action) => {
      state.promoPer = action.payload;
    },
    setAllPromo: (state, action) => {
      state.allPromo = action.payload;
    },
    setPromo_id: (state, action) => {
      state.promo_id = action.payload;
    }, 
  },
});

export const { setStore_info, setProduct_info, setItem_info, setPromoPer, setCategory_info, setAllPromo,setPromo_id } = promotions.actions;

export default promotions.reducer;
