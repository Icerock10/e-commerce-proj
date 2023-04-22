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
    resetSearch: (state) => {
      return {
        ...state,
        products: state.originalProduts,
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
        state.originalProduts,
        categoryOrSubCategory,
        product
      );
      return {
        ...state,
        products: filteredProductsByCategory,
        resetPixels: flag,
      };
    },
    sortByKeyWords: (state, action: PayloadAction<sortByKeyWordsPayload>) => {
      const { value, flag } = action.payload;
      return {
        ...state,
        products: filterProductsByUserInput(value, state.originalProduts),
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
      const updatedProducts = state.products.map((product) => {
        const storageKey = `heart${product.id}`;
        if (product.id === productId) {
          if (isProductLiked) {
            localStorage.setItem(storageKey, productId.toString());
          } else {
            localStorage.removeItem(storageKey);
          }
          return { ...product, liked: isProductLiked };
        }
        return product;
      });
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
  resetSearch,
} = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectResetPixelsFlag = (state: RootState) =>
  state.products.resetPixels;
export default productsSlice.reducer;
