import React, { useState, useEffect, useRef } from "react";
import "./Cart.scss";
import { useCart } from "./useCart";
import { Checkbox } from "./Checkbox";
import Button from "./Button";
import { useClickOutside } from "./useClickOutside";
import { PlusIcon, MinusIcon } from "../../../assets/images/icons/Icons";
import { calculateTotalAmount } from "../../../helpers/calculateTotal";
import { ThankNotification } from "./ThankNotification";
import { Checkout } from "./Checkout";
export const Cart = () => {
  const { cartRef } = useClickOutside();
  const {
    productsInCart,
    handleChange,
    handleProductRemove,
    isChecked,
    selectAllCheckboxes,
    removeSelectedProducts,
    calculateQuantityAmount,
    isThankNotificationShown,
    showThankNotification,
  } = useCart();

  return (
    <div className="cart__wrapper" ref={cartRef}>
      {isThankNotificationShown ? (
        <ThankNotification />
      ) : (
        <>
          <div className="cart__wrapper_heading">
            <h2>Cart</h2>
            <div className="cart__wrapper_remove">
              <Button handleClick={() => removeSelectedProducts(isChecked)} />
              <span>Remove</span>
            </div>
          </div>
          <div className="cart__container cart__container_header">
            <div className="cart__container_elem product-cart">
              <Checkbox
                id={undefined}
                checkedProp={isChecked}
                handleChange={() => selectAllCheckboxes(isChecked)}
              />{" "}
              <span style={{ marginLeft: ".5rem" }}>Product</span>
            </div>
            <div
              style={{ textAlign: "center" }}
              className="cart__container_elem quantity"
            >
              <span>Quantity</span>
            </div>
            <div className="cart__container_elem price">
              <span>Price</span>
            </div>
          </div>
          <div className="container__wrapper">
            {productsInCart.map((product: any) => {
              return (
                <div key={product.id} className="cart__container">
                  <div className="cart__container_elem product-cart">
                    <Checkbox
                      checkedProp={product.checkedProp}
                      handleChange={handleChange}
                      id={product.id}
                    />
                    <div className="cart__image">
                      <img src={product.image} />
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
                      <span>Remove</span>
                    </div>
                  </div>
                  <div className="cart__container_elem price">
                    <span>{product.price * product.quantity}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <Checkout handleNotification={showThankNotification} />
        </>
      )}
    </div>
  );
};
