import React from "react";
import { scrollBreakpoints } from "../../mocks/scrollBreakpoints";

export const useScroll = () => {
  const scrollToSection = (position: number, e?: any): void => {
    if (window.innerWidth < 640) {
      const titles = document.querySelectorAll(".fashion_title");
      titles.forEach((title) => {
        if (title.textContent === e.target.textContent) {
          title.scrollIntoView({ behavior: "smooth" });
        }
      });
      return;
    }

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
};
