import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDetails: null,
  cartItemData: null,
  providerInfo: null,
  cartCount: 0
};

const cartDetails = createSlice({
  name: "cartDetails",
  initialState,
  reducers: {
    setCartDetails: (state, action) => {
      state.cartDetails = action.payload;
    },
    setCartItemData: (state, action) => {
      state.cartItemData = action.payload;
     const itemCount = action?.payload?.stores[0]?.items.filter((item)=>{
      return item.quantity > 0})
    state.cartCount = itemCount?.length
    localStorage.setItem("cartCount", JSON.stringify(itemCount?.length))
      
    },
    setProviderInfo: (state, action) => {
      state.providerInfo = action.payload;
    },
    setCartCount : (state, action ) => {
      state.cartCount = action.payload;
    }
  },
});

export const { setCartDetails, setCartItemData, setProviderInfo ,setCartCount } =
  cartDetails.actions;

export default cartDetails.reducer;
