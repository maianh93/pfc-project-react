import { createSlice } from "@reduxjs/toolkit";
import categoriesApi from "../../services/categories.service";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            categoriesApi.endpoints.getAllCategories.matchFulfilled,
            (state, action) => {
                return action.payload;
            }
        );
    },
});

export default categoriesSlice.reducer;

export const selectAllCategories = (state) => state.categories;

export const selectCategoriesWithPromotion = (state) => {
    return state.categories.filter((p) => p.point < 0)
}

export const selectCategoriesWithoutPromotion = (state) => {
    return state.categories.filter((p) => p.point > 0)
}

export const selectCategoryNameById = (id) => (state)  => {
    const name = state.categories.find(name => name.id == id).descriptions.VN.text
   return name;
}