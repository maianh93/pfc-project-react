import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const productsByCategoriesBaseQuery = fetchBaseQuery({
//   baseUrl: "http://phungmaianh.ddns.net/pfc/biz/products/search/",
// });

const productsByCategoriesBaseQuery = fetchBaseQuery({
  baseUrl: "http://pfc-be-node-dev.ddns.net/",
});

// const categoriesBaseQuery = fetchBaseQuery({
//   baseUrl: "http://phungmaianh.ddns.net/pfc/biz/categories/search/",
// });

const categoriesBaseQuery = fetchBaseQuery({
  baseUrl: "http://pfc-be-node-dev.ddns.net/",
});

// const promotionBaseQuery = fetchBaseQuery({
//   baseUrl: "http://phungmaianh.ddns.net/pfc/biz/categories/",
// });

const promotionBaseQuery = fetchBaseQuery({
  baseUrl: "http://pfc-be-node-dev.ddns.net/categories/",
});


export { productsByCategoriesBaseQuery, categoriesBaseQuery, promotionBaseQuery };