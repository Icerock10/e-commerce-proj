import React, { useContext } from "react";
import { calculateTotalAmount } from "../../../helpers/calculateTotal";
import { useCart } from "./useCart";
import { LanguageContext } from "../../../helpers/languageContext";
import { priceFormatWithCommas } from "../../../helpers/priceFormat";
import { IChekout } from "../../../interfaces/interfaces";
import { RoundedButton } from "../../Buttons/RoundedButton";

export const Checkout = ({ handleNotification, buttonTitle }: IChekout) => {
  const { t } = useContext(LanguageContext);
  const { productsInCart } = useCart();
  return (
    <div className="checkout__section-wrapper">
      <div className="checkout__section">
        <div className="checkout__section_item subtotal">
          <span>{t("subtotal")}</span>
          <span>
            {`$ ${priceFormatWithCommas(calculateTotalAmount(productsInCart))}`}
          </span>
        </div>
        <div className="checkout__section_item discount">
          <span>{t("discount")}</span>
          <span>{`$ 0`}</span>
        </div>
        <div className="checkout__section_item grandtotal">
          <span>{t("grandtotal")}</span>
          <span>
            {`$ ${priceFormatWithCommas(calculateTotalAmount(productsInCart))}`}
          </span>
        </div>
        <RoundedButton
          className="checkout__button"
          handleClick={handleNotification}
        >
          {buttonTitle}
        </RoundedButton>
      </div>
    </div>
  );
};
