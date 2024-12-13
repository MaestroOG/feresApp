import { createSlice } from "@reduxjs/toolkit";
const storedCartItem = JSON.parse(localStorage.getItem('cartItemData'))
const initialState = {
  cartDetails: null,
  cartItemData: storedCartItem || null,
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
    localStorage.setItem("cartItemData", JSON.stringify(action.payload))
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
