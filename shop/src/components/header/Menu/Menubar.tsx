import React, { useContext } from "react";
import "./Menubar.scss";
import { Submenu } from "./Submenu";
import { useSubmenu } from "./useSubmenu";
import { Menu } from "../../interfaces/interfaces";
export const Menubar = () => {
  const { menuItems, t } = useSubmenu();

  return (
    <div className="drop">
      {Array.isArray(menuItems) &&
        menuItems.map((menu: Menu, index: number) => {
          return <Submenu items={menu} key={index} depthLevel={0} t={t} />;
        })}
    </div>
  );
};
