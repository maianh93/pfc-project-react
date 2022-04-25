import { createSlice } from "@reduxjs/toolkit";

const initCartState = () => {
    try {
        console.log([...JSON.parse(localStorage.getItem("cartState"))]);
        return [...JSON.parse(localStorage.getItem("cartState"))];
    } catch (error) {
        return [];
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initCartState(),
    reducers: {
        update: (state, action) => {
            let newState = state.filter((i) => i.id != action.payload.id);
            newState.push(action.payload);
            newState.sort((a, b) => a - b)
            localStorage.setItem("cartState", JSON.stringify(newState));
            return newState;
        },
        remove: (state, action) => {
            let newState = state.filter((i) => i.id != action.payload.id);
            localStorage.setItem("cartState", JSON.stringify(newState));
            return newState;

        },
        clear: (state) => {
            localStorage.setItem("cartState", JSON.stringify([]));
            return [];
        },
    },
});

export default cartSlice.reducer;
export const { update, clear, remove } = cartSlice.actions;

export const selectCount = (state) =>
    state.cart.reduce((total, item) => (total += item.quantity), 0);

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
