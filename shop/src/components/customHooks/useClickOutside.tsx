import React, { useRef, useEffect } from "react";
import { useCart } from "../header/Cart/useCart";
import { useVisibility } from "./useVisibility";

export const useClickOutside = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const switcherRef = useRef<HTMLDivElement>(null);
  const {
    isThankNotificationShown,
    closeNotificationAndCart,
    toggleCartVisibility,
  } = useCart();
  const { showLanguagesList, toggleSidebarVisibility } = useVisibility();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (refContainsClick(cartRef, event)) {
        if (isThankNotificationShown) {
          closeNotificationAndCart();
          return;
        }
        toggleCartVisibility();
      }
      if (refContainsClick(sideBarRef, event)) {
        toggleSidebarVisibility();
      }
      if (refContainsClick(switcherRef, event)) {
        showLanguagesList();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    cartRef,
    isThankNotificationShown,
    sideBarRef,
    switcherRef,
    closeNotificationAndCart,
    toggleCartVisibility,
    toggleSidebarVisibility,
    showLanguagesList,
  ]);

  const refContainsClick = (ref: React.RefObject<HTMLElement>, event: any) => {
    return ref.current && !ref.current.contains(event.target);
  };

  return {
    cartRef,
    sideBarRef,
    switcherRef,
  };
};
