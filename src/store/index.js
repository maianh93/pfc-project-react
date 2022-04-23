import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart.slice";
import productReducer from "./reducers/product.slice";
import categoriesReducer from "./reducers/categories.slice";
import productApi from "../services/product.service";
import categoriesApi from "../services/categories.service";

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        cart: cartReducer,
        products: productReducer,
        categories: categoriesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productApi.middleware,
            categoriesApi.middleware
        ]),
});

export default store;