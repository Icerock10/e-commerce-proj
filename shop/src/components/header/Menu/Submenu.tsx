import React, { FC, useState } from "react";
import { Dropdown } from "./Dropdown";

interface isSubmenu {
  items: {
    title: string;
    submenu: string[];
  };
  depthLevel: number;
}

export const Submenu: FC<isSubmenu> = ({ items, depthLevel }) => {
  const { submenu, title } = items;

  const [dropdown, setDropdown] = useState(false);

  const toggleDropDown = (e: any): void => {
    if (e.type === "click") {
      console.log(e.target.textContent);
      return setDropdown(!dropdown);
    }
    if (e.type === "mouseleave") return setDropdown(false);
    setDropdown(true);
  };
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
