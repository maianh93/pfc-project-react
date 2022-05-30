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
                return [{
                    id: 293,
                    description: action.payload.description,
                    imageUrl: action.payload.imageUrl,
                    isActive: "Y",
                    point: -1,
                    descriptions: {
                        VN: {
                            id: 294,
                            categoryId: 293,
                            language: "VN",
                            text: action.payload.description
                        }
                    }
                }]
            }
            // (state, action) => {
            //     let convertedProducts = action.payload.map(p => {
            //         let newP = {
            //             id: p.productId,
            //             description: p.description,
            //             imageUrl: p.imageUrl,
            //             isActive: 'Y',
            //             point: p.point,
            //             categoryId: p.categoryId,
            //             descriptions: {
            //                 VN: {
            //                     text: p.description,
            //                 }
            //             },
            //             units: {
            //                 VN: [...p.subDesc]
            //             },
            //             prices: {
            //                 VND: {
            //                     price: p.price
            //                 }
            //             }
            //         };
            //         return newP;
            //     });
            //     return convertedProducts;
            // }
        );
    },
});

export default promotionSlice.reducer;