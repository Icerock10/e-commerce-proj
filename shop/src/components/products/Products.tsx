import React from "react";
import "./Products.scss";
import { ProductList } from "./ProductList";
import { useProducts } from "./useProducts";

export default function Products() {
  const { uniqueProducts, productsState, t } = useProducts();

  return (
    <div className="container container__products">
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
    </div>
  );
}
