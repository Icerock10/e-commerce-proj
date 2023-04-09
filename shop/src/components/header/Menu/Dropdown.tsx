import React, { FC } from "react";
import { Submenu } from "./Submenu";
import { DropdownConfig } from "../../interfaces/interfaces";

export const Dropdown: FC<DropdownConfig> = ({
  depthLevel,
  submenus,
  dropdown,
}) => {
  depthLevel += 1;
  const dropdownClass = depthLevel > 1 ? "dropdown__submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: any, index: number) => (
        <Submenu
          key={index}
          depthLevel={depthLevel}
          items={submenu}
          dropdownClass={dropdownClass}
        />
      ))}
    </ul>
  );
};
