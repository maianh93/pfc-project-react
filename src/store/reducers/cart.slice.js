import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        update: (state, action) => {
           let newState = state.filter((i) => i.id != action.payload.id);
           newState.push(action.payload);
           return newState.sort((a, b) => a - b);
        },

        increase: (state, action) => {
            const item = state.find((item) => item.productId == action.payload);

            item.quantity += 1;
        },

        decrease: (state, action) => {
            const item = state.find((item) => item.productId == action.payload);

            if (item.quantity > 1) item.quantity -= 1;
        },

        remove: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.productId == action.payload
            );

            state.splice(itemIndex, 1);
        },

        clear: (state) => [],
    },
});

export default cartSlice.reducer;
export const { update, increase, decrease, clear } = cartSlice.actions;

export const selectCount = (state) =>
    state.cart.reduce((total, item) => (total += item.quantity), 0);

export const selectAllCartItems = (state) =>
    state.cart.map((item) => ({
        quantity: item.quantity,
        product: state.products.find((p) => p.id == item.productId),
    }));

export const selectTotalBill = (state) =>
    state.cart
        .map((item) => ({
            quantity: item.quantity,
            product: state.products.find((p) => p.id == item.productId),
        }))
        .reduce(
            (total, item) => (total += item.quantity * item.product.price),
            0
        );
