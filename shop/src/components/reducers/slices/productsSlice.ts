import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {products, ProductFields} from '../../../helpers/products';

const initialState: ProductFields[] = products;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByCategory: (state, action) => {
		const filteredItems = state.filter((item) => item.category === action.payload);
      return filteredItems.length > 0 ? filteredItems : initialState
    }
  }
});

export const { sortByCategory } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products; 

export default productsSlice.reducer;