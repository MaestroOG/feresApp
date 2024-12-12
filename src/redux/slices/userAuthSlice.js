// src/slices/userAuthSlice.js
import { createSlice } from "@reduxjs/toolkit";
const userData = JSON.parse(localStorage.getItem('userData')) 

const initialState = {
  isAuthenticated: false,
  user: userData || null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginUser, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
