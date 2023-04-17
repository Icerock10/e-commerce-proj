import React, { useContext, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { getJSONParsed } from "../../helpers/jsonParser";
import { products } from "../../mocks/products";
import { getLikedProductsFromLocalStorage } from "../../helpers/getLikesFromStorage";
import {
  selectAllProducts,
  updateProducts,
} from "../reducers/slices/productsSlice";
import { LanguageContext } from "../../helpers/languageContext";

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    const { categories, headings } = getJSONParsed(
      t("products", { returnObjects: true })
    );
    const translatedCategories = products.map((product, index) => ({
      ...product,
      category: categories[index],
      heading: headings[index],
    }));
    dispatch(
      updateProducts(getLikedProductsFromLocalStorage(translatedCategories))
    );
  }, [t, dispatch]);

  const productsState = useAppSelector(selectAllProducts);

  const uniqueProducts = [
    ...new Set(productsState.map((item) => item.category)),
  ];

  return {
    uniqueProducts,
    productsState,
    t,
  };
};
