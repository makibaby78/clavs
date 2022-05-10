import { createSlice } from "@reduxjs/toolkit";

const productInfo = []

export const productSlice = createSlice({
    name: "productinfo",
    initialState: {value: productInfo },
    reducers: {
        productInfoDisplay: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {productInfoDisplay} = productSlice.actions;

export default productSlice.reducer;