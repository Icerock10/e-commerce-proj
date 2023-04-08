import React from "react";
import "./Products.scss";
import { ProductList } from "./ProductList";
import { useAppSelector } from "../reducers/hooks";
import { selectAllProducts } from "../reducers/slices/productsSlice";

export default function Products() {
  const productsState = useAppSelector(selectAllProducts);
  return (
    <div className="container container__products">
      {!productsState.length ? (
        <h1 style={{ textAlign: "center" }}>Nothing was found...</h1>
      ) : (
        [...new Set(productsState.map((item) => item.category))].map(
          (category, index) => (
            <ProductList
              key={index}
              title={category}
              products={productsState.filter(
                (product) => product.category === category
              )}
            />
          )
        )
      )}
    </div>
  );
}
