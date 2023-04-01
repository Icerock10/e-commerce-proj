import React, { cloneElement, useState } from "react";
import "./Products.scss";
import Phones from "./Phones";
import { products, getUniqueCategories } from "../../helpers/products";

function Products() {
  return (
    <>
      {getUniqueCategories.map((category) => (
        <Phones
          key={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          products={products.filter(
            (product) => product.category === category.toLowerCase()
          )}
        />
      ))}
    </>
  );
}

export default Products;
