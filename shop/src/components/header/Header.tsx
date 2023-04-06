import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { LanguageContext } from "../../helpers/languageContext";
import { Search, Menu } from "../../assets/images/icons/Icons";
import Switcher from "./Switcher";
import "./Header.scss";
import { Sidebar } from "./Sidebar";
import SidebarLogic from "./SidebarLogic";
import { Menubar } from "./Menu/Menubar";

export const Header = () => {
  const { t } = useContext(LanguageContext);
  const { toggleSidebarVisibility } = SidebarLogic();
  return (
    <>
      <Sidebar />
      <div className="container" style={{ zIndex: 3 }}>
        <div className="container__logo">
          <img src={logo}></img>
        </div>
        <div className="main">
          <div
            className="main__menu"
            style={{ color: "#fff" }}
            onClick={() => toggleSidebarVisibility()}
          >
            <Menu />
          </div>
          <Menubar />
          <div className="input__group">
            <input
              type="text"
              className="input__group_form"
              placeholder={t("search")}
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}
              >
                <Search />
              </button>
            </div>
          </div>
          <Switcher />
        </div>
      </div>
    </>
  );
};
