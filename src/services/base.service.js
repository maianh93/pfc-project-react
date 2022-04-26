import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsByCategoriesBaseQuery = fetchBaseQuery({
  baseUrl: "http://phungmaianh.ddns.net/pfc/biz/products/search/",
});

const categoriesBaseQuery = fetchBaseQuery({
  baseUrl: "http://phungmaianh.ddns.net/pfc/biz/categories/search/",
});

const promotionBaseQuery = fetchBaseQuery({
  baseUrl: "http://phungmaianh.ddns.net/pfc/biz/categories/",
});


export { productsByCategoriesBaseQuery, categoriesBaseQuery, promotionBaseQuery };