import { createApi } from "@reduxjs/toolkit/query/react";
import { promotionBaseQuery } from "./base.service";

const productApi = createApi({
    reducerPath: "promotionApi",
    baseQuery: promotionBaseQuery,
    endpoints: (builder) => ({
        getPromotion: builder.query({
            query: () => "promotion"
        }),
    }),
});

export default productApi;
export const { useGetPromotionQuery } = productApi;
