import { createSlice } from "@reduxjs/toolkit";
import productApi from "../../services/product.service";

const productSlice = createSlice({
    name: "products",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            productApi.endpoints.getproductsByCategoriesId.matchFulfilled,
            (state, action) => {
                let categoryId = action.meta.arg.originalArgs.id;
                let convertedProducts = action.payload.map(p => {
                    let newP = {
                        id: p.productId,
                        description: p.description,
                        imageUrl: p.imageUrl,
                        isActive: 'Y',
                        point: p.point,
                        categoryId: p.categoryId,
                        descriptions: {
                            VN: {
                                text: p.description,
                            }
                        },
                        units: {
                            VN: [...p.subDesc]
                        },
                        prices: {
                            VND: {
                                price: p.price
                            }
                        }
                    };
                    return newP;
                });
                return {...state, [categoryId] : convertedProducts};
            }
        );
    },
});

export default productSlice.reducer;

export const selectProductById = (id) => (state) =>
    state.products.find((item) => item.id == id);

export const selectAllProduct = (state) => state.products
