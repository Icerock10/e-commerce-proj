import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {products, ProductFields} from '../../../helpers/products';

interface IProduct {
	products: ProductFields[],
	resetPixels: boolean;
}

const initialState: IProduct = {
	products: products,
	resetPixels: false
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByCategory: (state, action) => {
		const { product, categoryOrSubCategory, flag } = action.payload;
		const filteredItems = state.products.filter((item: any) => {
			return item[categoryOrSubCategory] === product 
		});
		return {
			...state,
			products: filteredItems.length > 0 ? filteredItems : initialState.products,
			resetPixels: flag
		}
    },
	 resetPixelsAfterDragg: (state, action) => {
		return {
			...state,
			resetPixels: action.payload
		}
	 }
  }
});

export const { sortByCategory, resetPixelsAfterDragg } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectResetPixelsFlag = (state: RootState) =>  state.products.resetPixels;

export default productsSlice.reducer;