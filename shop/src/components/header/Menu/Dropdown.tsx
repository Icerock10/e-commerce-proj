import React, { FC, useState } from "react";
import { Submenu } from "./Submenu";

export interface IsDropdown {
  submenus: any;
  dropdown: any;
  depthLevel: any;
}

export const Dropdown: FC<IsDropdown> = ({
  submenus,
  dropdown,
  depthLevel,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown__submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: any, index: any) => (
        <Submenu items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
