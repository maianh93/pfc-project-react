import { createSlice } from "@reduxjs/toolkit";
import promotionApi from "../../services/promotion.service"

const promotionSlice = createSlice({
    name: "promotions",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            promotionApi.endpoints.getPromotion.matchFulfilled,
            (state, action) => {
                return action.payload;
            }
        );
    },
});

export default promotionSlice.reducer;