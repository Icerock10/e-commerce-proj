import React from "react";
import "./Products.scss";
import { ProductList } from "./ProductList";
import { useProducts } from "./useProducts";
import { ChevronDown, ChevronUp } from "../../assets/images/icons/Icons";
import { Button } from "./Button";
import useScroll from "../header/useScroll";
export default function Products() {
  const { uniqueProducts, productsState, t } = useProducts();
  const { scrollIntoViewDependingOnDirection } = useScroll();

  return (
    <div className="container container__products">
      <Button
        role="bottom"
        handleClick={() => scrollIntoViewDependingOnDirection("bottom")}
      >
        <ChevronDown />
      </Button>
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
      <Button
        role="top"
        handleClick={() => scrollIntoViewDependingOnDirection("top")}
      >
        <ChevronUp />
      </Button>
    </div>
  );
}
