import React from "react";
import logo from "../../assets/images/logo.png";
import { Menu } from "../../assets/images/icons/Icons";
import { Switcher } from "./Switcher";
import { Input } from "./Input";
import "./Header.scss";
import { Sidebar } from "./Sidebar";
import { Menubar } from "./Menu/Menubar";
import { Cart } from "./Cart/Cart";
import { useVisibility } from "../commonHooks/useVisibility";

export const Header = () => {
  const { toggleSidebarVisibility, isCartShown, productsInCartLength } =
    useVisibility();

  return (
    <>
      <Sidebar />
      {!productsInCartLength ? null : isCartShown && <Cart />}
      <div className="container" style={{ zIndex: 3 }}>
        <div className="container__logo">
          <img alt="logo" src={logo}></img>
        </div>
        <div className="main">
          <div
            className="main__menu"
            style={{ color: "#fff" }}
            onClick={() => toggleSidebarVisibility()}
          >
            <div className="burger__menu" style={{ height: "50px" }}>
              <Menu />
            </div>
          </div>
          <Menubar />
          <Input />
          <Switcher />
        </div>
      </div>
    </>
  );
};
