import { createApi } from "@reduxjs/toolkit/query/react";
import { productsByCategoriesBaseQuery } from "./base.service";

const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: productsByCategoriesBaseQuery,
    endpoints: (builder) => ({
        getproductsByCategoriesId: builder.query({
            query: ({ id }) => `byCategoryId?categoryId=${id}`,
        }),
    }),
});

export default productApi;
export const { useGetproductsByCategoriesIdQuery } = productApi;
