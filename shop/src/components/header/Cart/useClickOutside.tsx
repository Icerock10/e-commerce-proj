import React, { useRef, useEffect } from "react";
import { useCart } from "./useCart";

export const useClickOutside = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { toggleCartVisibility } = useCart();

  const { isThankNotificationShown, closeNotificationAndCart } = useCart();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (isThankNotificationShown) {
          closeNotificationAndCart();
          return;
        }
        toggleCartVisibility();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef, isThankNotificationShown]);

  return {
    cartRef,
  };
};
