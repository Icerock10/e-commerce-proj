import React from "react";
import { scrollBreakpoints } from "../../mocks/scrollBreakpoints";
import {
  getVisibilityState,
  toggleVisibility,
} from "../reducers/slices/visibilitySlice";
import { useAppSelector, useAppDispatch } from ".././reducers/hooks";
import { selectAllProducts } from "../reducers/slices/productsSlice";

function SidebarLogic() {
  const { isSidebarShown } = useAppSelector(getVisibilityState);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const uniqueMenusAndHomeMenu = [
    ...new Set(["Home", ...products.map((item) => item.category)]),
  ];
  const toggleSidebarVisibility = () => {
    dispatch(toggleVisibility("isSidebarShown"));
  };

  const scrollToSection = (position: number): void => {
    const { scrollTo } = scrollBreakpoints[position];
    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: "smooth",
    });
  };
  return {
    scrollToSection,
    scrollBreakpoints,
    isSidebarShown,
    toggleSidebarVisibility,
    uniqueMenusAndHomeMenu,
  };
}

export default SidebarLogic;
