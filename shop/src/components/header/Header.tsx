import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { LanguageContext } from "../../helpers/languageContext";
import { Search, Menu } from "../../assets/images/icons/Icons";
import Switcher from "./Switcher";
import "./Header.scss";
import { Sidebar } from "./Sidebar";
import SidebarLogic from "./SidebarLogic";

export const Header = () => {
  const { isSidebarShown, setisSidebarShown } = SidebarLogic();
  const { t } = useContext(LanguageContext);

  return (
    <>
      <Sidebar
        isSidebarShown={isSidebarShown}
        setisSidebarShown={setisSidebarShown}
      />
      <div className="container">
        <div className="container__logo">
          <img src={logo}></img>
        </div>
        <div className="main">
          <div
            className="main__menu"
            style={{ color: "#fff" }}
            onClick={() => setisSidebarShown(!isSidebarShown)}
          >
            <Menu />
          </div>
          <div className="dropdown">
            <button className="btn dropdown__toggle">{t("categories")}</button>
          </div>
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
