import React, { FC, useState } from "react";
import { Submenu } from "./Submenu";
import { useSubmenu } from "./useSubmenu";
export interface DropdownConfig {
  submenus: any;
  dropdown: boolean;
  depthLevel: number;
}

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
        <Submenu key={index} depthLevel={depthLevel} items={submenu} />
      ))}
    </ul>
  );
};
