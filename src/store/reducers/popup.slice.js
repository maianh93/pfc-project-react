import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: null,
    reducers: {
      changePopupProduct: (state, action) => ({...action.payload}),
      
    },
  });

export const { changePopupProduct } = popupSlice.actions;

export default popupSlice.reducer;