import React, { FC } from "react";
import SidebarLogic from "./SidebarLogic";
import { Close } from "../.././assets/images/icons/Icons";

interface SidebarProps {
  isSidebarShown: boolean;
  setisSidebarShown: (key: boolean) => void;
}

export const Sidebar: FC<SidebarProps> = ({
  isSidebarShown,
  setisSidebarShown,
}) => {
  const { scrollToSection, scrollBreakpoints } = SidebarLogic();

  return (
    <div className="sidebar">
      <div
        onClick={() => setisSidebarShown(!isSidebarShown)}
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
  );
};
