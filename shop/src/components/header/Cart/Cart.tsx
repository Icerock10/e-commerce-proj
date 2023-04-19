import React, { useContext } from "react";
import { LanguageContext } from "../../../helpers/languageContext";
import "./Cart.scss";
import { useCart } from "./useCart";
import { Checkbox } from "./Checkbox";
import Button from "./Button";
import { useClickOutside } from "../../customHooks/useClickOutside";
import { priceFormatWithCommas } from "../../../helpers/priceFormat";
import { PlusIcon, MinusIcon } from "../../../assets/images/icons/Icons";
import { ThankNotification } from "./ThankNotification";
import { Checkout } from "./Checkout";
export const Cart = () => {
  const { cartRef } = useClickOutside();
  const {
    productsInCart,
    getProductId,
    handleProductRemove,
    isChecked,
    selectAllCheckboxes,
    removeSelectedProducts,
    calculateQuantityAmount,
    isThankNotificationShown,
    showThankNotification,
  } = useCart();

  const { t } = useContext(LanguageContext);

  return (
    <div className="overlay">
      <div className="cart__wrapper" ref={cartRef}>
        {isThankNotificationShown ? (
          <ThankNotification />
        ) : (
          <>
            <div className="cart__wrapper_heading">
              <h2>{t("cart")}</h2>
              <div className="cart__wrapper_remove">
                <Button handleClick={() => removeSelectedProducts(isChecked)} />
                <span>{t("remove")}</span>
              </div>
            </div>
            <div className="cart__container cart__container_header">
              <div className="cart__container_elem product-cart">
                <Checkbox
                  id={undefined}
                  checkedProp={isChecked}
                  handleChange={() => selectAllCheckboxes(isChecked)}
                />{" "}
                <span style={{ marginLeft: ".5rem" }}>{t("product")}</span>
              </div>
              <div
                style={{ textAlign: "center" }}
                className="cart__container_elem quantity"
              >
                <span>{t("quantity")}</span>
              </div>
              <div className="cart__container_elem price">
                <span>{t("price")}</span>
              </div>
            </div>
            <div className="container__wrapper">
              {productsInCart.map((product: any) => {
                return (
                  <div key={product.id} className="cart__container">
                    <div className="cart__container_elem product-cart">
                      <Checkbox
                        checkedProp={product.checked}
                        handleChange={getProductId}
                        id={product.id}
                      />
                      <div className="cart__image">
                        <img alt="product" src={product.image} />
                      </div>
                      <span style={{ marginLeft: "1rem" }}>
                        {product.heading}
                      </span>
                    </div>
                    <div className="cart__container_elem">
                      <div className="quantity__elem">
                        <div
                          className="quantity__elem_operand"
                          onClick={() =>
                            calculateQuantityAmount(product.id, "subtract")
                          }
                        >
                          <MinusIcon />
                        </div>
                        <span>{product.quantity}</span>
                        <div
                          className="quantity__elem_operand"
                          onClick={() =>
                            calculateQuantityAmount(product.id, "add")
                          }
                        >
                          <PlusIcon />
                        </div>
                      </div>
                      <div className="cart__wrapper_remove">
                        <Button
                          handleClick={() => handleProductRemove(product.id)}
                        />
                        <span>{t("remove")}</span>
                      </div>
                    </div>
                    <div className="cart__container_elem price">
                      <span>
                        {`$${priceFormatWithCommas(
                          product.price * product.quantity
                        )}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Checkout
              handleNotification={showThankNotification}
              buttonTitle={t("checkout")}
            />
          </>
        )}
      </div>
    </div>
  );
};
