import React, { useRef, useEffect } from 'react';
import { useCart } from '../header/Cart/useCart';
import { useVisibility } from './useVisibility';

export const useClickOutside = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const switcherRef = useRef<HTMLDivElement>(null);

  const { isThankNotificationShown, closeNotificationAndCart, toggleCartVisibility } = useCart();
  const { showLanguagesList, toggleSidebarVisibility } = useVisibility();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (isThankNotificationShown) {
          closeNotificationAndCart();
          return;
        }
        toggleCartVisibility();
      }
      if (
        sideBarRef.current &&
        !event.target.closest('.sidebar') &&
        !event.target.closest('.main__burger')
      ) {
        toggleSidebarVisibility();
      }
      if (switcherRef.current && !event.target.closest('.switcher')) {
        showLanguagesList();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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

  return {
    cartRef,
    sideBarRef,
    switcherRef,
  };
};
