import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { sortByCategory } from "../../reducers/slices/productsSlice";
import SidebarLogic from "../SidebarLogic";
import { validateCategory } from "../../../helpers/validateCategory";

export const useSubmenu = () => {
  const dispatch = useAppDispatch();
  const { scrollToSection } = SidebarLogic();
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  const toggleDropDown = ({
    type,
    target: { textContent, role },
  }: any): void => {
    if (type === "click") {
      dispatch(
        sortByCategory({
          categoryProduct: validateCategory(textContent),
          categoryOrSubCategory: role,
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
