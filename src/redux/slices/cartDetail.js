import { createSlice } from "@reduxjs/toolkit";
const localStorageStoredCartItem = localStorage.getItem('cartItemData')
let storedCartItem = null;
if (localStorageStoredCartItem && localStorageStoredCartItem !== "undefined") {
  storedCartItem = JSON.parse(localStorageStoredCartItem);
}
const initialState = {
  cartDetails: null,
  cartItemData: storedCartItem || null,
  providerInfo: null,
  cartCount: 0,
  orderStatus: 1
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
      const itemCount = action?.payload?.stores[0]?.items.filter((item) => {
        return item.quantity > 0
      })
      state.cartCount = itemCount?.length
      localStorage.setItem("cartCount", JSON.stringify(itemCount?.length))

    },
    setProviderInfo: (state, action) => {
      state.providerInfo = action.payload;
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    setOrderStatus: (state, action) => {
      state.orderStatus = action.payload;
    }
  },
});

export const { setCartDetails, setCartItemData, setProviderInfo, setCartCount,setOrderStatus } =
  cartDetails.actions;

export default cartDetails.reducer;
