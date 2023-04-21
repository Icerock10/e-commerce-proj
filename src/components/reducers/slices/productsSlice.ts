import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {
  filterProductsByCategory,
  filterProductsByUserInput,
} from "../../../helpers/filters";
import {
  IProduct,
  SortByCategoryPayload,
  sortByKeyWordsPayload,
  ProductFields,
  LikesPayloadProps,
} from "../../interfaces/interfaces";

const initialState: IProduct = {
  products: [],
  originalProduts: [],
  resetPixels: false,
  value: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<ProductFields[]>) => {
      return {
        ...state,
        products: action.payload,
        originalProduts: action.payload,
      };
    },
    getUserValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
    sortByCategory: (state, action: PayloadAction<SortByCategoryPayload>) => {
      const { product, categoryOrSubCategory, flag } = action.payload;
      const filteredProductsByCategory = filterProductsByCategory(
        categoryOrSubCategory === "category"
          ? state.originalProduts
          : state.products,
        categoryOrSubCategory,
        product
      );
      return {
        ...state,
        products: filteredProductsByCategory.length
          ? filteredProductsByCategory
          : state.originalProduts,
        resetPixels: flag,
      };
    },
    sortByKeyWords: (state, action: PayloadAction<sortByKeyWordsPayload>) => {
      const { value, flag } = action.payload;
      const searchedProducts = filterProductsByUserInput(value, state.products);
      return {
        ...state,
        products: searchedProducts.length
          ? searchedProducts
          : filterProductsByUserInput(value, state.originalProduts),
        resetPixels: flag,
        value: "",
      };
    },
    resetPixelsAfterNewCategory: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        resetPixels: action.payload,
      };
    },
    sortByLikes: (state, action: PayloadAction<LikesPayloadProps>) => {
      const { productId, isProductLiked } = action.payload;

      const updatedProducts = state.products.map(
        ({ id, liked, ...product }) => {
          if (id === productId) {
            localStorage.setItem(`heart${productId}`, productId.toString());
            const storageKey = localStorage.getItem(`heart${productId}`);
            if (!isProductLiked && Number(storageKey) === productId) {
              localStorage.removeItem(`heart${productId}`);
            }
            return { ...product, id, liked: isProductLiked };
          }
          return { ...product, id, liked };
        }
      );

      return {
        ...state,
        products: updatedProducts,
      };
    },
  },
});

export const {
  sortByCategory,
  resetPixelsAfterNewCategory,
  sortByKeyWords,
  getUserValue,
  sortByLikes,
  updateProducts,
} = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectResetPixelsFlag = (state: RootState) =>
  state.products.resetPixels;
export default productsSlice.reducer;
