import React from "react";
import { scrollBreakpoints } from "../../mocks/scrollBreakpoints";

function useScroll() {
  const scrollToSection = (position: number): void => {
    const { scrollTo } = scrollBreakpoints[position];
    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollIntoViewDependingOnDirection = (
    direction: "top" | "bottom"
  ): void => {
    window.scrollTo({
      top: direction === "top" ? 0 : document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return {
    scrollToSection,
    scrollBreakpoints,
    scrollIntoViewDependingOnDirection,
  };
}

export default useScroll;
