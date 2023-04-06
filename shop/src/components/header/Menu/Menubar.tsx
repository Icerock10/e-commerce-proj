import React from "react";
import "./Menubar.scss";
import { Dropdown } from "./Dropdown";
import { menuItems } from "../../../helpers/menuItems";
import { Submenu } from "./Submenu";

export const Menubar = () => {
  return (
    <div className="drop">
      {menuItems.map((menu: any, index: any) => {
        const depthLevel = 0;
        return <Submenu items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </div>
  );
};
