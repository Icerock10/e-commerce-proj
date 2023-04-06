import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { sortByCategory } from "../../reducers/slices/productsSlice";
import SidebarLogic from "../SidebarLogic";

export const useSubmenu = () => {
  const dispatch = useAppDispatch();
  const { scrollToSection } = SidebarLogic();
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  const toggleDropDown = ({ type, target: { textContent } }: any): void => {
    if (type === "click") {
      const categoryWithoutArrow = textContent.slice(textContent, -1);
      dispatch(sortByCategory(categoryWithoutArrow));
      scrollToSection(1);
      return setIsDropDownShown(!isDropDownShown);
    }
    if (type === "mouseleave") return setIsDropDownShown(false);
    setIsDropDownShown(true);
  };
  return { toggleDropDown, isDropDownShown };
};
