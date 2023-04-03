import React from "react";
import "./Products.scss";
import ProductList from "./ProductList";
import { getUniqueCategories } from "../../helpers/products";
import { useAppSelector } from "../reducers/hooks";
import { selectAllProducts } from "../reducers/slices/productsSlice";

function Products() {
  const productsState = useAppSelector(selectAllProducts);
  return (
    <>
      {getUniqueCategories.map((category) => (
        <ProductList
          key={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          products={productsState.filter(
            (product) => product.category === category.toLowerCase()
          )}
        />
      ))}
    </>
  );
}

export default Products;
