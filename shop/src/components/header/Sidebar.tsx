import React from "react";
import SidebarLogic from "./SidebarLogic";
import { Close } from "../.././assets/images/icons/Icons";
import { useClickOutside } from "../customHooks/useClickOutside";
import { useVisibility } from "../customHooks/useVisibility";

export const Sidebar = () => {
  const { scrollToSection, uniqueProducts } = SidebarLogic();
  const { toggleSidebarVisibility, isSidebarShown } = useVisibility();
  const { sideBarRef } = useClickOutside();

  return (
    <>
      {isSidebarShown && (
        <div className="sidebar" ref={sideBarRef}>
          <div
            onClick={() => toggleSidebarVisibility()}
            className="sidebar__close"
          >
            <Close />
          </div>
          <ul className="sidebar__menu">
            {uniqueProducts.map((product, index) => {
              return (
                <li
                  key={`key-${index}`}
                  onClick={() => scrollToSection(index + 1)}
                >
                  {product}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
