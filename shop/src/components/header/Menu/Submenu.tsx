import React, { FC, useState } from "react";
import { Dropdown } from "./Dropdown";
import { useSubmenu } from "./useSubmenu";
interface SubmenuOptions {
  items: {
    title: string;
    submenu: string[];
  };
  depthLevel: number;
}

export const Submenu: FC<SubmenuOptions> = ({ items, depthLevel }) => {
  const { submenu, title } = items;
  const { toggleDropDown, dropdown } = useSubmenu();

  return (
    <li
      className="menu__items"
      onMouseEnter={toggleDropDown}
      onMouseLeave={toggleDropDown}
      onClick={(e) => toggleDropDown(e)}
    >
      <button className={`${title === undefined ? "hover__disabled" : ""}`}>
        <span>{title}</span>
        {submenu &&
          (depthLevel === 0 ? (
            <div className="drop__toggle">{"categories"}</div>
          ) : (
            <span>&raquo;</span>
          ))}
      </button>
      {submenu && (
        <Dropdown
          depthLevel={depthLevel}
          submenus={submenu}
          dropdown={dropdown}
        />
      )}
    </li>
  );
};
