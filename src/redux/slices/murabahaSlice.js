import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    murabahaPop: false
}

const murabahaSlice = createSlice({
    name: "Murabaha",
    initialState,
    reducers: {
        setMurabahaPop: (state) => {
            state.murabahaPop = !state.murabahaPop
        }
    }
})

export const { setMurabahaPop } = murabahaSlice.actions
export default murabahaSlice.reducer