import React, { useContext } from "react";
import "./Menubar.scss";
import { Submenu } from "./Submenu";
import { useSubmenu } from "./useSubmenu";
export const Menubar = () => {
  const { menuItems, t } = useSubmenu();

  return (
    <div className="drop">
      {Array.isArray(menuItems) &&
        menuItems.map((menu: any, index: number) => {
          return <Submenu items={menu} key={index} depthLevel={0} t={t} />;
        })}
    </div>
  );
};
