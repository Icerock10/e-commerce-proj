import React, { useState } from "react";
import { scrollBreakpoints } from "../.././helpers/scrollBreakpoints";

function SidebarLogic() {
  const [isSidebarShown, setisSidebarShown] = useState<boolean>(false);

  const scrollToSection = (position: number): void => {
    const { scrollTo } = scrollBreakpoints[position];
    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: "smooth",
    });
  };
  return {
    isSidebarShown,
    setisSidebarShown,
    scrollToSection,
    scrollBreakpoints,
  };
}

export default SidebarLogic;
