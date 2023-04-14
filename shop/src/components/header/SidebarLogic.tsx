import React from "react";
import { scrollBreakpoints } from "../../mocks/scrollBreakpoints";
import { useProducts } from "../products/useProducts";

function SidebarLogic() {
  const { uniqueProducts } = useProducts();

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
    uniqueProducts,
  };
}

export default SidebarLogic;
