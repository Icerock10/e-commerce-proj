import React from "react";
import { scrollBreakpoints } from "../../mocks/scrollBreakpoints";

function SidebarLogic() {
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
  };
}

export default SidebarLogic;
