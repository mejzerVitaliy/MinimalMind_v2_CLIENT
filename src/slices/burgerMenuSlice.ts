import { createSlice } from "@reduxjs/toolkit"

const initialState: { isOpened: boolean } = {
    isOpened:false
}

export const burgerSlice = createSlice({
    name: "burgerMenu",
    initialState,
    reducers: {
        toggleBurger: (state) => {
            state.isOpened = !state.isOpened
        }
    }
})

export const { toggleBurger } = burgerSlice.actions
export default  burgerSlice.reducer