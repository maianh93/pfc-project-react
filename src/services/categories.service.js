import { createApi } from "@reduxjs/toolkit/query/react";
import { categoriesBaseQuery } from "./base.service";

const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: categoriesBaseQuery,
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => "categories",
        }),
    }),
});

export default categoriesApi;
export const { useGetAllCategoriesQuery } = categoriesApi;