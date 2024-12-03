import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userChat: null,
};

const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setUserChat: (state, action) => {
      state.userChat = action.payload;
    },
  },
});

export const { setUserChat } = chat.actions;

export default chat.reducer;
