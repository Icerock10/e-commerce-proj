import React from "react";
import logo from "../../assets/images/logo.png";
import { Menu, Search } from "../../assets/images/icons/Icons";
import { IconButton } from "../Buttons/IconButton";
import { Switcher } from "./Switcher";
import "./Header.scss";
import { Sidebar } from "./Sidebar";
import { Menubar } from "./Menu/Menubar";
import { Cart } from "./Cart/Cart";
import { useVisibility } from "../commonHooks/useVisibility";
import { Input } from "../Inputs/Input";
import { InputLogic } from "./InputLogic";

export const Header = () => {
  const { toggleSidebarVisibility, isCartShown, productsInCartLength } =
    useVisibility();
  const { dispatch, value, getUserValue, sortProductsByUserInput } =
    InputLogic();

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
          <div className="input__group" style={{ position: "relative" }}>
            <Input
              value={value}
              className="input__group_form"
              placeholder={"search"}
              handleChange={(e) => dispatch(getUserValue(e.target.value))}
              handleKeyDown={(e) =>
                e.key === "Enter" && sortProductsByUserInput()
              }
            />
            <IconButton
              className="btn btn-secondary"
              handleClick={sortProductsByUserInput}
            >
              <Search />
            </IconButton>
          </div>
          <Switcher />
        </div>
      </div>
    </>
  );
};
