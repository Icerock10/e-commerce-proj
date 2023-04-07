import React, { useState } from "react";
import "./Menubar.scss";
import { menuItems } from "../../../helpers/menuItems";
import { Submenu } from "./Submenu";
import { useSubmenu } from "./useSubmenu";

export const Menubar = () => {
  return (
    <div className="drop">
      {menuItems.map((menu: any, index) => {
        return <Submenu items={menu} key={index} depthLevel={0} />;
      })}
    </div>
  );
};