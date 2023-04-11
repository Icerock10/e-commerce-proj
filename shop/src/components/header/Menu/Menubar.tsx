import React, { useContext } from "react";
import "./Menubar.scss";
import { Submenu } from "./Submenu";
import { LanguageContext } from "../../../helpers/languageContext";
import { getJSONParsed } from "../../../helpers/jsonParser";

export const Menubar = () => {
  const { t } = useContext(LanguageContext);
  const menuItems = getJSONParsed(
    t("menuItems", {
      returnObjects: true,
    })
  );

  return (
    <div className="drop">
      {Array.isArray(menuItems) &&
        menuItems.map((menu: any, index: number) => {
          return <Submenu items={menu} key={index} depthLevel={0} t={t} />;
        })}
    </div>
  );
};
