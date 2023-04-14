import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk  } from '../store';
import { ProductFields } from "../../interfaces/interfaces";
import { ICart } from "../../interfaces/interfaces";

const cartState: ICart =  {
	productsInCart: [],
	isChecked: false,
	checkBoxIds: [],
}

	export const cartSlice = createSlice({
		name: "cart",
		initialState: cartState,
		reducers: {
			addProductToCart: (state, action: PayloadAction<ProductFields[]>) => {
				const onlyUniqueProducts = action.payload.filter((product) => {
					return !state.productsInCart.some((item) => item.id === product.id);
				 });
				return {
					...state,
					productsInCart: [...state.productsInCart, ...onlyUniqueProducts],
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
			},
			calculateQuantity: (state, action: PayloadAction<any>) => {
				const { id, operand } = action.payload
				const updatedProducts = state.productsInCart.map(product => {
					if(product.id === id) {
						return {...product, quantity: operand === 'add' ? product.quantity + 1 
						: (product.quantity < 2 ) ? product.quantity : product.quantity - 1}
					}
					return product;
				})
				return {
					...state,
					productsInCart: updatedProducts
				}
			},
			productsBought: (state) => {
				return {
					...state,
					productsInCart: []
				}
			}
		}
	});

export const { addProductToCart, toggleChecked, removeProduct, selectAll, removeSelected, calculateQuantity, productsBought } = cartSlice.actions;
export const getProductsInCartLength = (state: RootState) => state.cart.productsInCart.length;
export const selectAllProductsInCart = (state: RootState) => state.cart;

export default cartSlice.reducer;

export const getCheckBoxAsync = (targetId: number): AppThunk => (dispatch) => {
		dispatch(toggleChecked(targetId))
  };