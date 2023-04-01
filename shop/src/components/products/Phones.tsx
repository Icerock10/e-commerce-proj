import React, { FC, useState } from "react";
import useSwiper from "./useSwiper";
import { ProductsSchema } from "../../helpers/products";

interface Title {
  title: string;
  products: ProductsSchema[];
}

const Phones: FC<Title> = ({ title, products }) => {
  const [
    {
      scrollToSelectedPage,
      handleMouseDown,
      containerRef,
      currentPage,
      productsPerSwipe,
      customStyle,
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
      >
        {products.map(({ id, heading, price, image }) => {
          return (
            <div className="elem" key={id} style={customStyle}>
              <h4>{heading}</h4>
              <p>
                Price <span>{price}</span>
              </p>
              <img src={image} alt="img" />
              <div className="card__footer">
                <span>Buy Now</span>
                <span>See More</span>
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

export default Phones;
