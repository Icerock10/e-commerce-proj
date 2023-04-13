import React, { useState } from "react";
import "./Cart.scss";
import { useCart } from "./useCart";
import { Checkbox } from "./Checkbox";

export const Cart = () => {
  const {
    productsInCart,
    handleChange,
    handleProductRemove,
    isChecked,
    selectAllCheckboxes,
    removeSelectedProducts,
  } = useCart();

  return (
    <div className="cart__wrapper">
      <div className="cart__container">
        <div className="cart__container_elem product-cart">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => selectAllCheckboxes(isChecked)}
          />{" "}
          <span>Product</span>
        </div>
        <div
          style={{ textAlign: "center" }}
          className="cart__container_elem quantity"
        >
          <span>Quantity</span>
        </div>
        <div className="cart__container_elem price">
          <span>Price</span>
          <button onClick={() => removeSelectedProducts(isChecked)}>
            RemoveAll
          </button>
        </div>
      </div>
      {productsInCart.map((product: any) => {
        return (
          <div key={product.id} className="cart__container">
            <div className="cart__container_elem product-cart">
              <input
                type="checkbox"
                checked={!product.checkedProp ? false : product.checkedProp}
                onChange={handleChange}
                id={product.id}
              />
              <div className="cart__image">
                <img src={product.image} />
              </div>
              <span style={{ marginLeft: "1rem" }}>{product.heading}</span>
            </div>
            <div className="cart__container_elem quantity_elem">
              <span>-</span>
              <span>1</span>
              <span>+</span>
              <button onClick={() => handleProductRemove(product.id)}>
                Remove
              </button>
            </div>
            <div className="cart__container_elem price">
              <span>{product.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
