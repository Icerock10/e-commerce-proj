import React, { useContext } from "react";
import { CheckMarkIcon } from "../../../assets/images/icons/Icons";
import { getTodayDate } from "../../../helpers/dateFormatter";
import { useCart } from "./useCart";
import { LanguageContext } from "../../../helpers/languageContext";
import { Checkout } from "./Checkout";
import { priceFormatWithCommas } from "../../../helpers/priceFormat";

export const ThankNotification = () => {
  const { productsInCart, closeNotificationAndCart } = useCart();
  const { t } = useContext(LanguageContext);

  return (
    <div className="notification__wrapper">
      <div className="notification__header">
        <CheckMarkIcon />
        <h2>{t("order")}</h2>
        <p style={{ marginBottom: "1rem" }}>{t("confirmationOrder")}</p>
      </div>
      <div className="notification__main">
        <div style={{ marginTop: "1rem" }} className="notification__main_date">
          <p>{t("date")}</p>
          <p className="notification__subtitle">{getTodayDate()}</p>
        </div>
        <div className="notification__main_payment">
          <p>{t("paymentMethod")}</p>
          <p className="notification__subtitle">{t("card")}</p>
        </div>
        <div className="notification__main_shipping">
          <p>{t("shippingMethod")}</p>
          <p className="notification__subtitle">{t("delivery")}</p>
        </div>
      </div>
      <div className="notification__order">
        <p>{t("yourOrder")}</p>
        {productsInCart.map((product: any) => {
          return (
            <div key={product.id} className="notification__order_container">
              <div className="notification__order_image">
                <img alt="product" src={product.image} />
              </div>
              <div className="notification__order_heading">
                <span>{product.heading}</span>
                <span className="quantity">{`x${product.quantity}`}</span>
              </div>
              <div className="notification__order_price">
                <span>{`$${priceFormatWithCommas(product.price)}`}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Checkout
        handleNotification={closeNotificationAndCart}
        buttonTitle={t("continueShopping")}
      />
    </div>
  );
};
