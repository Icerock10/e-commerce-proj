import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {products, ProductFields} from '../../../mocks/products';
import { filterProductsByCategory, filterProductsByUserInput } from "../../../helpers/filters";

interface IProduct {
	products: ProductFields[],
	originalProducts: ProductFields[],
	resetPixels: boolean;
	value: string
}

const initialState: IProduct = {
	products: products,
	originalProducts: products,
	resetPixels: false,
	value: ''
};

type SortByCategoryPayload = {
	product: string;
	categoryOrSubCategory: 'category' | 'subCategory';
	flag: boolean;
 };

type sortByKeyWordsPayload = {
	value: string,
	flag: boolean
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
	getUserValue: (state, action) => {
		return {
			...state,
			value: action.payload
		}
	},
	sortByKeyWords: (state, action: PayloadAction<sortByKeyWordsPayload>) => {
		const { value, flag } = action.payload
		 const searchedProducts = filterProductsByUserInput(value, state.products);
		 return {
			...state,
			products: searchedProducts.length ? searchedProducts : filterProductsByUserInput(value, state.originalProducts),
			resetPixels: flag,
			value: ''
		 }
	},
    sortByCategory: (state, action: PayloadAction<SortByCategoryPayload>) => {
		const { product, categoryOrSubCategory, flag } = action.payload;
		const filteredProductsByCategory = filterProductsByCategory(
			categoryOrSubCategory === 'category' ? state.originalProducts : state.products,
			categoryOrSubCategory,
			product
		 );
		return {
			...state,
			products: filteredProductsByCategory.length ? filteredProductsByCategory : state.originalProducts,
			resetPixels: flag
		}
    },
	 resetPixelsAfterNewCategory: (state, action) => {
		return {
			...state,
			resetPixels: action.payload
		}
	 },
  }
});

export const { sortByCategory, resetPixelsAfterNewCategory, sortByKeyWords, getUserValue } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectResetPixelsFlag = (state: RootState) =>  state.products.resetPixels;

export default productsSlice.reducer;



 