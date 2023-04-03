import React from "react";
import SidebarLogic from "./SidebarLogic";
import { Close } from "../.././assets/images/icons/Icons";

export const Sidebar = () => {
  const {
    scrollToSection,
    scrollBreakpoints,
    isSidebarShown,
    toggleSidebarVisibility,
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
            {scrollBreakpoints.map(({ menu }, index) => {
              const menuItem = menu.charAt(0).toUpperCase() + menu.slice(1);
              return (
                <li key={`key-${index}`} onClick={() => scrollToSection(index)}>
                  {menuItem}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
