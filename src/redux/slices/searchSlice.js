import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
    searchData: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchData: (state, action) => {
            state.searchData = action.payload;
        },
    },
=======
  searchData: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
>>>>>>> origin/date-time-model-fixes
});

export const { setSearchData } = searchSlice.actions;

export default searchSlice.reducer;
