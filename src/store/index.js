import { configureStore } from "@reduxjs/toolkit";
import categoriesApi from "../services/categories.service";
import productApi from "../services/product.service";
import promotionApi from "../services/promotion.service";
import categoriesReducer from "./reducers/categories.slice";
import productReducer from "./reducers/product.slice";
import cartReducer from "./reducers/cart.slice";
import popupReducer from "./reducers/popup.slice"
import promotionReducer from "./reducers/promotion.slice"

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [promotionApi.reducerPath]: promotionApi.reducer,

        cart: cartReducer,
        products: productReducer,
        categories: categoriesReducer,
        popup: popupReducer,
        promotions: promotionReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productApi.middleware,
            categoriesApi.middleware
        ]),
});

export default store;