import React, { useState, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { sortByCategory } from "../../reducers/slices/productsSlice";
import SidebarLogic from "../SidebarLogic";
import { LanguageContext } from "../../../helpers/languageContext";
import { getJSONParsed } from "../../../helpers/jsonParser";

export const useSubmenu = () => {
  const dispatch = useAppDispatch();
  const { scrollToSection } = SidebarLogic();
  const [isDropDownShown, setIsDropDownShown] = useState<boolean>(false);
  const { t } = useContext(LanguageContext);

  const menuItems = getJSONParsed(
    t("menuItems", {
      returnObjects: true,
    })
  );

  const toggleDropDown = ({ target, type }: any): void => {
    if (type === "click") {
      const product = target.closest("div").textContent;
      const category = target.closest("div").role;
      dispatch(
        sortByCategory({
          product: product,
          categoryOrSubCategory: category,
          flag: true,
        })
      );
      scrollToSection(1);
      return setIsDropDownShown(!isDropDownShown);
    }
    if (type === "mouseleave") return setIsDropDownShown(false);
    setIsDropDownShown(true);
  };
  return { toggleDropDown, isDropDownShown, menuItems, t };
};
