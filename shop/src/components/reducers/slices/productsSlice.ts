import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { products } from '../../../mocks/products';
import { filterProductsByCategory, filterProductsByUserInput } from "../../../helpers/filters";
import { getLikedProductsFromLocalStorage } from "../../../helpers/getLikesFromStorage";
import { IProduct, SortByCategoryPayload, sortByKeyWordsPayload } from "../../interfaces/interfaces";


const initialState: IProduct = {
	products: getLikedProductsFromLocalStorage(products),
	originalProducts: products,
	resetPixels: false,
	value: '',
};

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
	 sortByLikes: (state, action: PayloadAction<any>) => {
		const { productId, isProductLiked } = action.payload;
		
      const updatedProducts = state.products.map(({ id, liked, ...product }) => {
			if (id === productId) {
			  localStorage.setItem(`heart${productId}`, productId.toString());
			  const storageKey = localStorage.getItem(`heart${productId}`);
			  if (!isProductLiked && Number(storageKey) === productId) {
				 localStorage.removeItem(`heart${productId}`);
			  }
			  return { ...product, id, liked: isProductLiked };
			}
			return { ...product, id, liked };
		 });
		 
		 return {
			...state,
			products: updatedProducts,
		 }
	 }
  }
});

export const { sortByCategory, resetPixelsAfterNewCategory, sortByKeyWords, getUserValue, sortByLikes } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectResetPixelsFlag = (state: RootState) =>  state.products.resetPixels;

export default productsSlice.reducer;



 