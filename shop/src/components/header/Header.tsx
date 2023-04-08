import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { LanguageContext } from "../../helpers/languageContext";
import { Menu } from "../../assets/images/icons/Icons";
import Switcher from "./Switcher";
import Input from "./Input";
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
          <Input />
          <Switcher />
        </div>
      </div>
    </>
  );
};
