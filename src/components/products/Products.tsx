import React from "react";
import "./Products.scss";
import { ProductList } from "./ProductList";
import { useProducts } from "./useProducts";
import { ChevronDown, ChevronUp } from "../../assets/images/icons/Icons";
import { ArrowButton } from "../Buttons/ArrowButton";
import { ButtonRoles } from "../../enums/buttonRoles";
import { useScroll } from "../globalHooks/useScroll";

export const Products = () => {
  const { uniqueProducts, productsState, t } = useProducts();
  const { scrollIntoViewDependingOnDirection } = useScroll();

  return (
    <div className="container container__products">
      <ArrowButton
        role={ButtonRoles.BOTTOM}
        className="jumping-element"
        handleClick={() => scrollIntoViewDependingOnDirection("bottom")}
      >
        <ChevronDown />
      </ArrowButton>
      {!productsState.length ? (
        <h1 style={{ textAlign: "center" }}>Nothing was found...</h1>
      ) : (
        uniqueProducts.map((category, index) => (
          <ProductList
            key={index}
            index={index}
            t={t}
            title={category}
            products={productsState.filter(
              (product) => product.category === category
            )}
          />
        ))
      )}
      <ArrowButton
        role={ButtonRoles.TOP}
        className="jumping-element"
        handleClick={() => scrollIntoViewDependingOnDirection("top")}
      >
        <ChevronUp />
      </ArrowButton>
    </div>
  );
};
