import { createSlice } from "@reduxjs/toolkit";
import productApi from "../../services/product.service";

const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            productApi.endpoints.getproductsByCategoriesId.matchFulfilled,
            (state, action) => {
                return action.payload;
            }
        );
    },
});

export default productSlice.reducer;

export const selectProductById = (id) => (state) =>
    state.products.find((item) => item.id == id);

export const selectAllProduct = (state) => state.products
