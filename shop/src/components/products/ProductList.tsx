import React, { FC } from "react";
import useSwiper from "./useSwiper";
import Heart from "./Heart";
import { Title } from "../interfaces/interfaces";

export const ProductList: FC<Title> = ({ title, products, t }) => {
  const [{ scrollToSelectedPage, containerRef, currentPage, pages, px }] =
    useSwiper(products);

  return (
    <>
      <h1 style={{ textAlign: "center" }} className="fashion_title">
        {title}
      </h1>
      <div className="card__container" ref={containerRef}>
        {products.map(({ id, heading, price, image, liked }) => {
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
                  <span>{t("buyButton")}</span>
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
            <label key={`key-${index}`} htmlFor="bio" className="overlay">
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
