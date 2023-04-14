import React from "react";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import {
  toggleVisibility,
  getVisibilityState,
} from "../reducers/slices/visibilitySlice";

export const useVisibility = () => {
  const dispatch = useAppDispatch();
  const {
    isLangListShown,
    isSidebarShown,
    isCartShown,
    isThankNotificationShown,
  } = useAppSelector(getVisibilityState);
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
    dispatch(toggleVisibility("isCartShown"));
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
  };
};
