import React from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import {
  addProductToCart,
  removeProduct,
  selectAll,
  removeSelected,
} from "../../reducers/slices/cartSlice";
import { selectAllProductsInCart } from "../../reducers/slices/cartSlice";
import { getCheckBoxAsync } from "../../reducers/slices/cartSlice";

export const useCart = () => {
  const dispatch = useAppDispatch();

  const { productsInCart } = useAppSelector(selectAllProductsInCart);
  const isChecked = useAppSelector((state) => state.cart.isChecked);

  const handleChange = (e: any) => {
    dispatch(getCheckBoxAsync(Number(e.target.id)));
  };
  const addProduct = (product: any) => {
    dispatch(addProductToCart([product]));
  };
  const handleProductRemove = (id: number) => {
    dispatch(removeProduct(id));
  };

  const selectAllCheckboxes = (isChecked: boolean): void => {
    dispatch(selectAll(isChecked));
  };

  const removeSelectedProducts = (isChecked: boolean): void => {
    dispatch(removeSelected(isChecked));
  };

  return {
    addProduct,
    productsInCart,
    handleChange,
    isChecked,
    handleProductRemove,
    selectAllCheckboxes,
    removeSelectedProducts,
  };
};
