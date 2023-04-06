import React from "react";
import { scrollBreakpoints } from "../.././helpers/scrollBreakpoints";
import {
  getVisibilityState,
  toggleVisibility,
} from "../reducers/slices/visibilitySlice";
import { useAppSelector, useAppDispatch } from ".././reducers/hooks";

function SidebarLogic() {
  const { isSidebarShown } = useAppSelector(getVisibilityState);
  const dispatch = useAppDispatch();

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
  };
}

export default SidebarLogic;
