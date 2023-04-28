import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../globalHooks/reduxHooks';
import { getProductsInCartLength } from '../reducers/slices/cartSlice';
import { toggleVisibility, getVisibilityState } from '../reducers/slices/visibilitySlice';

export const useVisibility = () => {
  const dispatch = useAppDispatch();
  const productsInCartLength = useAppSelector(getProductsInCartLength);
  const {
    isLangListShown,
    isSidebarShown,
    isCartShown,
    isThankNotificationShown,
    isPopupShown,
    isMapWidgetTextShown,
  } = useAppSelector(getVisibilityState);

  useEffect(() => {
    if (isCartShown || isThankNotificationShown) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isThankNotificationShown, isCartShown]);

  const showLanguagesList = () => {
    dispatch(toggleVisibility('isLangListShown'));
  };
  const toggleSidebarVisibility = () => {
    dispatch(toggleVisibility('isSidebarShown'));
  };
  const showThankNotification = () => {
    dispatch(toggleVisibility('isThankNotificationShown'));
  };
  const toggleWidgetText = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 450) return;
    if (innerWidth < 450) {
      return dispatch(toggleVisibility('isMapWidgetTextShown'));
    }
    dispatch(toggleVisibility('isMapWidgetTextShown'));
  };
  const toggleCartVisibility = () => {
    if (!productsInCartLength) return;
    dispatch(toggleVisibility('isCartShown'));
  };
  const togglePopUpVisibility = () => {
    if (productsInCartLength) return;
    dispatch(toggleVisibility('isPopupShown'));
  };
  const isCartShownDependingOnLength = () => {
    if (!productsInCartLength) return null;
    return isCartShown;
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
    isMapWidgetTextShown,
    toggleWidgetText,
    isCartShownDependingOnLength,
  };
};
