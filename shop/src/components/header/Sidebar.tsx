import React from "react";
import SidebarLogic from "./SidebarLogic";
import { Close } from "../.././assets/images/icons/Icons";

export const Sidebar = () => {
  const {
    scrollToSection,
    isSidebarShown,
    toggleSidebarVisibility,
    uniqueProducts,
  } = SidebarLogic();

  return (
    <>
      {isSidebarShown && (
        <div className="sidebar">
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
