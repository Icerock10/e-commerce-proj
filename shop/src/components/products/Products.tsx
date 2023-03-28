import React from "react";
import "./Products.scss";
import { products } from "../../helpers/products";
import useSwiper from "./useSwiper";
import Phones from "./Phones";

function Products() {
  const [
    {
      scrollToSelectedPage,
      handleMouseDown,
      containerRef,
      px,
      offsetX,
      productsPerSwipe,
      currentPage,
    },
  ] = useSwiper();

  const css = {
    transform: `translate3d(${px + offsetX}px, 0px, 0px)`,
  };

  return (
    <div className="container container__products">
      <h1 style={{ textAlign: "center" }} className="fashion_taital">
        Man &amp; Woman Fashion
      </h1>
      <div
        className="card__container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
      >
        {products.map((item) => {
          return (
            <div className="elem" key={item.id} style={css}>
              <h4>{item.heading}</h4>
              <p>
                Price <span>{item.price}</span>
              </p>
              <img src={item.image} alt="img" />
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
}

export default Products;
