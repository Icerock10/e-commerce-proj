import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {products, ProductFields} from '../../../mocks/products';
import { filterProductsByCategory, filterProductsByUserInput } from "../../../helpers/filters";



const myLocalStorageFunc = (stateOfProducts: ProductFields[]) => {
	const myProducts = stateOfProducts.map((item, index) => {
		const storagetKeys = localStorage.getItem(`heart${item.id}`)
		
	})
	return stateOfProducts;
}	

interface IProduct {
	products: ProductFields[],
	originalProducts: ProductFields[],
	resetPixels: boolean;
	value: string
}

const initialState: IProduct = {
	products: myLocalStorageFunc(products),
	originalProducts: products,
	resetPixels: false,
	value: '',
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
	 sortByLikes: (state, action: PayloadAction<any>) => {
		const { productId, isProductLiked } = action.payload;
		
      const filteredd = state.products.map(product => {
			if(product.id === productId) {
					localStorage.setItem(`heart${productId}`, isProductLiked.toString());
					const storageKey = localStorage.getItem(`heart${productId}`)
						if(storageKey === 'false') {
							localStorage.removeItem(`heart${productId}`);
						}
				return {...product, liked: isProductLiked};
			}
			return product;
		})
		 return {
			...state,
			products: filteredd,
		 }
	 }
  }
});

export const { sortByCategory, resetPixelsAfterNewCategory, sortByKeyWords, getUserValue, sortByLikes } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectResetPixelsFlag = (state: RootState) =>  state.products.resetPixels;

export default productsSlice.reducer;



 