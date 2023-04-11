import React, { useContext, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { getJSONParsed } from "../../helpers/jsonParser";
import { products } from "../../mocks/products";
import { getLikedProductsFromLocalStorage } from "../../helpers/getLikesFromStorage";
import { selectAllProducts } from "../reducers/slices/productsSlice";
import { LanguageContext } from "../../helpers/languageContext";
import { updateProducts } from "../reducers/slices/productsSlice";
export const useProducts = () => {
  const dispatch = useAppDispatch();

  const { t } = useContext(LanguageContext);

  const { categories } = getJSONParsed(t("products", { returnObjects: true }));

  useEffect(() => {
    const translatedCategories = products.map((product, index) => ({
      ...product,
      category: categories[index],
    }));
    dispatch(
      updateProducts(getLikedProductsFromLocalStorage(translatedCategories))
    );
  }, [t]);
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
