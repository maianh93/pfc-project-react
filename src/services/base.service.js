import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const productsByCategoriesBaseQuery = fetchBaseQuery({
//   baseUrl: "http://phungmaianh.ddns.net/pfc/biz/products/search/",
// });

const productsByCategoriesBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/",
});

// const categoriesBaseQuery = fetchBaseQuery({
//   baseUrl: "http://phungmaianh.ddns.net/pfc/biz/categories/search/",
// });

const categoriesBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/",
});

// const promotionBaseQuery = fetchBaseQuery({
//   baseUrl: "http://phungmaianh.ddns.net/pfc/biz/categories/",
// });

const promotionBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/categories/",
});


export { productsByCategoriesBaseQuery, categoriesBaseQuery, promotionBaseQuery };