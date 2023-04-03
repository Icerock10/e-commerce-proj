import React, { FC, useState } from "react";
import useSwiper from "./useSwiper";
import { ProductFields } from "../../helpers/products";

interface Title {
  title: string;
  products: ProductFields[];
}

const ProductList: FC<Title> = ({ title, products }) => {
  const [
    {
      scrollToSelectedPage,
      handleMouseDown,
      containerRef,
      currentPage,
      productsPerSwipe,
      customStyle,
      isDragging,
    },
  ] = useSwiper(products);

  return (
    <div className="container container__products">
      <h1 style={{ textAlign: "center" }} className="fashion_title">
        {title}
      </h1>
      <div
        className="card__container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        style={{ cursor: `${isDragging ? "grabbing" : "grab"}` }}
      >
        {products.map(({ id, heading, price, image }) => {
          return (
            <div className="product" key={id} style={customStyle}>
              <div className="product__container">
                <h4>{heading}</h4>
                <p className="price__container">
                  <span className="product__price">Price</span>
                  <span>{price}</span>
                </p>
                <div className="product__image">
                  <img src={image} alt="img" />
                </div>

                <div className="card__footer">
                  <span>Buy Now</span>
                  <span>See More</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="radio_container">
        {[...Array(productsPerSwipe)].map((_, index) => {
          return (
            <label key={`key-${index}`} htmlFor="bio" className="overlay">
              <input
                onClick={() => scrollToSelectedPage(index)}
                checked={currentPage === index}
                type="radio"
                className={`radio_container__item`}
              />
              <div className="circle"></div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
