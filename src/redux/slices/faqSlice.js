import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    faqData: null,
};

const faq = createSlice({
  name: "faqData",
  initialState,
  reducers: {
    setFaqData: (state, action) => {
      state.faqData = action.payload;
    },
  },
});

export const { setFaqData } = faq.actions;

export default faq.reducer;
