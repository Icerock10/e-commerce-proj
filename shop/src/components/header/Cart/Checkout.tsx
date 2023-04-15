import React from "react";
import { calculateTotalAmount } from "../../../helpers/calculateTotal";
import { useCart } from "./useCart";

export const Checkout = ({ handleNotification }: any) => {
  const { productsInCart } = useCart();
  return (
    <div className="checkout__section-wrapper">
      <div className="checkout__section">
        <div className="checkout__section_item subtotal">
          <span>Subtotal</span>
          <span>{calculateTotalAmount(productsInCart)}</span>
        </div>
        <div className="checkout__section_item discount">
          <span>Discount</span>
          <span>0$</span>
        </div>
        <div className="checkout__section_item grandtotal">
          <span>GrandTotal</span>
          <span>{calculateTotalAmount(productsInCart)}</span>
        </div>
        <button className="checkout__button" onClick={handleNotification}>
          Checkout Now
        </button>
      </div>
    </div>
  );
};
