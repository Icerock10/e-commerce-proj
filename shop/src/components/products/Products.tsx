import React, { cloneElement, useState } from "react";
import "./Products.scss";
import Phones from "./Phones";
import { phones, laptops, headphones, products } from "../../helpers/products";

function Products() {
  const Laptops = cloneElement(<Phones title={"Laptops"} products={laptops} />);
  const Headphones = cloneElement(
    <Phones title={"Headphones"} products={headphones} />
  );
  return (
    <>
      <Phones title={"Phones"} products={phones} />
      {Laptops}
      {Headphones}
    </>
  );
}

export default Products;
