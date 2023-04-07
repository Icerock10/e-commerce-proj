import React, { FC } from "react";
import { Dropdown } from "./Dropdown";
import { useSubmenu } from "./useSubmenu";
interface SubmenuOptions {
  items: {
    title: string;
    submenu: string[];
  };
  depthLevel: number;
  dropdownClass: string;
}

export const Submenu: FC<SubmenuOptions> = ({
  items,
  depthLevel,
  dropdownClass,
}) => {
  const { submenu, title } = items;
  const { toggleDropDown, isDropDownShown } = useSubmenu();

  return (
    <li
      className="menu__items"
      onMouseEnter={toggleDropDown}
      onMouseLeave={toggleDropDown}
      onClick={toggleDropDown}
    >
      <div
        className={`${title === undefined ? "hover__disabled" : ""}`}
        role={`${dropdownClass ? "subCategory" : "category"}`}
      >
        {title}
        {submenu &&
          (depthLevel === 0 ? (
            <div className="drop__toggle">{"categories"}</div>
          ) : (
            <span>&raquo;</span>
          ))}
      </div>
      {submenu && (
        <Dropdown
          depthLevel={depthLevel}
          submenus={submenu}
          dropdown={isDropDownShown}
        />
      )}
    </li>
  );
};
