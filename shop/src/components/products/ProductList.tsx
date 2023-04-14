import React, { FC } from "react";
import useSwiper from "./useSwiper";
import Heart from "./Heart";
import { Title } from "../interfaces/interfaces";
import { useCart } from "../header/Cart/useCart";

export const ProductList: FC<Title> = ({ title, products, t }) => {
  const [{ scrollToSelectedPage, containerRef, currentPage, pages, px }] =
    useSwiper(products);

  const { addProduct } = useCart();

  return (
    <>
      <h1 style={{ textAlign: "center" }} className="fashion_title">
        {title}
      </h1>
      <div className="card__container" ref={containerRef}>
        {products.map((product) => {
          const { id, heading, price, image, liked } = product;
          return (
            <div
              className="product"
              key={id}
              style={{ transform: `translate3d(${px}px, 0px, 0px)` }}
            >
              <div className="product__container">
                <h4>{heading}</h4>
                <p className="price__container">
                  <span className="product__price">{t("price")}</span>
                  <span>{price}</span>
                </p>
                <div className="product__image">
                  <img src={image} alt="img" />
                </div>
                <div className="card__footer">
                  <button onClick={() => addProduct(product)}>
                    {t("buyButton")}
                  </button>
                  <Heart id={id} liked={liked} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="radio_container">
        {[...Array(pages)].map((_, index) => {
          return (
            <label
              key={`key-${index}`}
              htmlFor="bio"
              className="radio__overlay"
            >
              <input
                onClick={() => scrollToSelectedPage(index)}
                checked={currentPage === index}
                readOnly
                type="radio"
                className={`radio_container__item`}
              />
              <div className="circle"></div>
            </label>
          );
        })}
      </div>
    </>
  );
};
