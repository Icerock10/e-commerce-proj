import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { sortByCategory } from "../../reducers/slices/productsSlice";
import SidebarLogic from "../SidebarLogic";

export const useSubmenu = () => {
  const dispatch = useAppDispatch();
  const { scrollToSection } = SidebarLogic();
  const [isDropDownShown, setIsDropDownShown] = useState<boolean>(false);

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
  return { toggleDropDown, isDropDownShown };
};
