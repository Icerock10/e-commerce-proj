import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { getProductsInCartLength } from "../reducers/slices/cartSlice";
import {
  toggleVisibility,
  getVisibilityState,
} from "../reducers/slices/visibilitySlice";

export const useVisibility = () => {
  const dispatch = useAppDispatch();
  const productsInCartLength = useAppSelector(getProductsInCartLength);
  const {
    isLangListShown,
    isSidebarShown,
    isCartShown,
    isThankNotificationShown,
    isPopupShown,
  } = useAppSelector(getVisibilityState);

  useEffect(() => {
    if (isCartShown || isThankNotificationShown) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isThankNotificationShown, isCartShown]);

  const showLanguagesList = () => {
    dispatch(toggleVisibility("isLangListShown"));
  };
  const toggleSidebarVisibility = () => {
    dispatch(toggleVisibility("isSidebarShown"));
  };
  const showThankNotification = () => {
    dispatch(toggleVisibility("isThankNotificationShown"));
  };
  const toggleCartVisibility = () => {
    if (!productsInCartLength) return;
    dispatch(toggleVisibility("isCartShown"));
  };
  const togglePopUpVisibility = () => {
    if (productsInCartLength) return;
    dispatch(toggleVisibility("isPopupShown"));
  };
  return {
    showLanguagesList,
    isLangListShown,
    toggleSidebarVisibility,
    isSidebarShown,
    isCartShown,
    isThankNotificationShown,
    showThankNotification,
    toggleCartVisibility,
    isPopupShown,
    togglePopUpVisibility,
    productsInCartLength,
  };
};
