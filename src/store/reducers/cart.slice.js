import { createSlice } from "@reduxjs/toolkit";

const initCartState = () => {
    try {
        let initState = [...JSON.parse(localStorage.getItem("cartState"))];
        initState.sort((a, b) => a.id - b.id)
        console.log("initState", initState);
        return initState;
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
            newState.sort((a, b) => a.id - b.id)
            localStorage.setItem("cartState", JSON.stringify(newState));
            return newState;
        },
        remove: (state, action) => {
            let newState = state.filter((i) => i.id != action.payload.id);
            localStorage.setItem("cartState", JSON.stringify(newState));
            return newState;

        },
        clear: () => {
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
            product: state.products.find((p) => p.id == item.id),
        }))
        .reduce(
            (total, item) => (total += item.quantity * item.product.price),
            0
        );
