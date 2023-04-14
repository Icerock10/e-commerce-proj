import React from "react";
import SidebarLogic from "./SidebarLogic";
import { Close } from "../.././assets/images/icons/Icons";
import { useClickOutside } from "../customHooks/useClickOutside";

export const Sidebar = () => {
  const {
    scrollToSection,
    isSidebarShown,
    toggleSidebarVisibility,
    uniqueProducts,
  } = SidebarLogic();

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
