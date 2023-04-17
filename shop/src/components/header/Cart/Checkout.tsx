import React, { JSXElementConstructor } from "react";
import { calculateTotalAmount } from "../../../helpers/calculateTotal";
import { useCart } from "./useCart";
import { priceFormatWithCommas } from "../../../helpers/priceFormat";
import { IChekout } from "../../interfaces/interfaces";

export const Checkout = ({ handleNotification, buttonTitle }: IChekout) => {
  const { productsInCart } = useCart();
  return (
    <div className="checkout__section-wrapper">
      <div className="checkout__section">
        <div className="checkout__section_item subtotal">
          <span>Subtotal</span>
          <span>
            {`$ ${priceFormatWithCommas(calculateTotalAmount(productsInCart))}`}
          </span>
        </div>
        <div className="checkout__section_item discount">
          <span>Discount</span>
          <span>{`$ 0`}</span>
        </div>
        <div className="checkout__section_item grandtotal">
          <span>GrandTotal</span>
          <span>
            {`$ ${priceFormatWithCommas(calculateTotalAmount(productsInCart))}`}
          </span>
        </div>
        <button className="checkout__button" onClick={handleNotification}>
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};
