import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import {products, ProductFields} from '../.././helpers/products';


const initialState: ProductFields[] = products;

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearArray: (state) => {
      return []
    },
  }
});

export const { clearArray } = counterSlice.actions;

export const selectAllProducts = (state: RootState) => state.products; 

export default counterSlice.reducer;