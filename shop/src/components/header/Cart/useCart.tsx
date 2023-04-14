import React from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import {
  addProductToCart,
  removeProduct,
  selectAll,
  removeSelected,
  calculateQuantity,
  productsBought,
} from "../../reducers/slices/cartSlice";
import { selectAllProductsInCart } from "../../reducers/slices/cartSlice";
import { getCheckBoxAsync } from "../../reducers/slices/cartSlice";
import { useVisibility } from "../../customHooks/useVisibility";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { productsInCart } = useAppSelector(selectAllProductsInCart);
  const isChecked = useAppSelector((state) => state.cart.isChecked);

  const {
    isCartShown,
    isThankNotificationShown,
    showThankNotification,
    toggleCartVisibility,
  } = useVisibility();

  const calculateQuantityAmount = (id: number, operand: string) => {
    dispatch(calculateQuantity({ id: id, operand: operand }));
  };

  const closeNotificationAndCart = () => {
    showThankNotification();
    toggleCartVisibility();
    dispatch(productsBought());
  };

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

  const removeSelectedProducts = (isChecked: boolean) => {
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
    isCartShown,
    toggleCartVisibility,
    calculateQuantityAmount,
    showThankNotification,
    isThankNotificationShown,
    closeNotificationAndCart,
  };
};
