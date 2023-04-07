import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {products, ProductFields} from '../../../helpers/products';

const initialState: ProductFields[] = products;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByCategory: (state, action) => {
		const { categoryProduct, categoryOrSubCategory } = action.payload;
		const filteredItems = state.filter((item: any) => {
			return item[categoryOrSubCategory] === categoryProduct
		});
      return filteredItems.length > 0 ? filteredItems : initialState
    }
  }
});

export const { sortByCategory } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products; 

export default productsSlice.reducer;