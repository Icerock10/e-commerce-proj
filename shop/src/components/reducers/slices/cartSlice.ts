import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk  } from '../store';
import { ProductFields } from "../../interfaces/interfaces";

interface ICart{
	productsInCart: ProductFields[]
	isChecked: boolean,
	checkBoxIds: number[]
}


const cartState: ICart =  {
	productsInCart: [],
	isChecked: false,
	checkBoxIds: []
}

	export const cartSlice = createSlice({
		name: "cart",
		initialState: cartState,
		reducers: {
			addProductToCart: (state, action: PayloadAction<ProductFields[]>) => {
				return {
					...state,
					productsInCart: [...state.productsInCart, ...action.payload],
				}
			},
			selectAll: (state, action) => {
				return {
					...state,
					isChecked: !action.payload,
					checkBoxIds: !state.isChecked ? state.productsInCart.map(product => product.id) : [],
					productsInCart: state.productsInCart.map(product => ({...product, checkedProp: !action.payload}))
				}
			},
			removeSelected: (state, action) => {
				const idsToRemove = state.productsInCart.filter(product => !state.checkBoxIds.includes(product.id))
				return {
					...state,
					productsInCart: idsToRemove,
					checkBoxIds: [],
					isChecked: !action.payload
				}
			},
			toggleChecked: (state, action: PayloadAction<any>) => {
				const isChecked = state.checkBoxIds.includes(action.payload);
				const updateStateProducts = state.productsInCart.map(product => {
					if(product.id === action.payload) {
						return {...product, checkedProp: !isChecked}
					}
					return product;
				})
				return {
					...state,
					productsInCart: updateStateProducts,
					checkBoxIds: isChecked ? state.checkBoxIds.filter(id => id !== action.payload) : [...state.checkBoxIds, action.payload],
				}
			},
			removeProduct: (state, action) => {
				if(!state.checkBoxIds.includes(action.payload)) return;
				return {
					...state,
					productsInCart: state.productsInCart.filter(product => product.id !== action.payload)
				}
			}
		}
	});

export const { addProductToCart, toggleChecked, removeProduct, selectAll, removeSelected } = cartSlice.actions;
export const getProductsInCartLength = (state: RootState) => state.cart.productsInCart.length;
export const selectAllProductsInCart = (state: RootState) => state.cart;

export default cartSlice.reducer;

export const getCheckBoxAsync = (targetId: number): AppThunk => (dispatch) => {
		dispatch(toggleChecked(targetId))
  };