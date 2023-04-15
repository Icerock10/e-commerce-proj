import React, { FC } from "react";
import { Dropdown } from "./Dropdown";
import { useSubmenu } from "./useSubmenu";
import {
  ChevronDoubleRight,
  ChevronDoubleDown,
} from "../../../assets/images/icons/Icons";
import { SubmenuOptions } from "../../interfaces/interfaces";

export const Submenu: FC<SubmenuOptions> = ({
  items,
  depthLevel,
  dropdownClass,
  t,
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
        <span className="menu__items_title">{title}</span>
        {submenu &&
          (depthLevel === 0 ? (
            <div className="drop__toggle">{t("categories")}</div>
          ) : (
            <span style={{ opacity: 0.7 }} className="menu__items_title">
              {isDropDownShown ? <ChevronDoubleDown /> : <ChevronDoubleRight />}
            </span>
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
