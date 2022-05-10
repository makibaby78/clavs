import { createSlice } from "@reduxjs/toolkit";

const shoppingCartData = []

export const cartSlice = createSlice({
    name: "cart",
    initialState: {value: shoppingCartData },
    reducers: {
        addToCart: (state, action) => {
            state.value.push(action.payload);
        },
        removeToCart:(state, action)=>{
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
    },
});

export const {addToCart, removeToCart} = cartSlice.actions;

export default cartSlice.reducer;