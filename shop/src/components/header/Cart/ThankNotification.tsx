import React from "react";
import { CheckMarkIcon } from "../../../assets/images/icons/Icons";
import { getTodayDate } from "../../../helpers/dateFormatter";
import { useCart } from "./useCart";
import { Checkout } from "./Checkout";
import { priceFormatWithCommas } from "../../../helpers/priceFormat";

export const ThankNotification = () => {
  const { productsInCart, closeNotificationAndCart } = useCart();

  return (
    <div className="notification__wrapper">
      <div className="notification__header">
        <CheckMarkIcon />
        <h2>Thanks for your order!</h2>
        <p style={{ marginBottom: "1rem" }}>
          The order confirmation sent to your email
        </p>
      </div>
      <div className="notification__main">
        <div style={{ marginTop: "1rem" }} className="notification__main_date">
          <p>Transaction Date</p>
          <p className="notification__subtitle">{getTodayDate()}</p>
        </div>
        <div className="notification__main_payment">
          <p>Payment method</p>
          <p className="notification__subtitle">Mastercard ending with ****</p>
        </div>
        <div className="notification__main_shipping">
          <p>Shipping method</p>
          <p className="notification__subtitle">
            Express delivery (1-3 business days)
          </p>
        </div>
      </div>
      <div className="notification__order">
        <p>Your order</p>
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
        buttonTitle="Continue shopping"
      />
    </div>
  );
};
