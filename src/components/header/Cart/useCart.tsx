import React from "react";
import { useAppDispatch, useAppSelector } from "../../globalHooks/reduxHooks";
import {
  addProductToCart,
  removeProduct,
  selectAll,
  removeSelected,
  calculateQuantity,
  productsBought,
  selectAllProductsInCart,
  getProductIdAsync,
} from "../../reducers/slices/cartSlice";
import { useVisibility } from "../../globalHooks/useVisibility";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { productsInCart, isChecked } = useAppSelector(selectAllProductsInCart);

  const {
    isCartShown,
    isThankNotificationShown,
    showThankNotification,
    toggleCartVisibility,
  } = useVisibility();

  const calculateQuantityAmount = (id: number, operand: string): void => {
    dispatch(calculateQuantity({ id: id, operand: operand }));
  };

  const closeNotificationAndCart = (): void => {
    showThankNotification();
    toggleCartVisibility();
    dispatch(productsBought());
  };

  const getProductId = ({ target: { id } }: any): void => {
    dispatch(getProductIdAsync(Number(id)));
  };

  const addProduct = (product: any): void => {
    dispatch(addProductToCart([product]));
  };

  const handleProductRemove = (id: number): void => {
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
    getProductId,
    isChecked,
    handleProductRemove,
    selectAllCheckboxes,
    removeSelectedProducts,
    isCartShown,
    toggleCartVisibility,
    calculateQuantityAmount,
    showThankNotification,
    isThankNotificationShown,
    closeNotificationAndCart,
  };
};
