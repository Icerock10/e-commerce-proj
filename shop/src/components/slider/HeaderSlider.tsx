import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import ukFlag from "../../assets/images/flag-uk.png";
import { languages } from "../../helpers/languages";
import {
  LeftArrow,
  RightArrow,
  Search,
  Menu,
  Cart,
} from "../../assets/images/icons/Icons";

export const HeaderSlider = ({ next, prev, t, i18n }: any) => {
  const [isSidebarShown, setisSidebarShown] = useState(false);
  const [isListShown, setisListShown] = useState(false);
  const currentLanguage = localStorage.getItem("i18nextLng");
  const [languageText, setlanguageText] = useState(() =>
    currentLanguage === "fr" ? "French" : "English"
  );

  const showList = () => {
    setisListShown(!isListShown);
  };
  const change = (language: string) => {
    const languageAbbreviation = language.slice(0, 2).toLowerCase();
    i18n.changeLanguage(languageAbbreviation);
    setlanguageText(language);
    setisListShown(!isListShown);
  };

  return (
    <>
      {isSidebarShown && <div className="sidebar"></div>}
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
            <button className="btn dropdown__toggle">All Category</button>
          </div>
          <div className="input__group">
            <input
              type="text"
              className="input__group_form"
              placeholder="Search this blog"
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
          <div className="header__box">
            <div className="header__box_switcher">
              <span onClick={showList} className="lang">
                <img src={languages[languageText]} />
                <span className="lang_text">{languageText}</span>
              </span>
              <div className="cart">
                <Cart className="cart__icon" />
                CART
              </div>
            </div>
          </div>
        </div>
        {isListShown &&
          Object.keys(languages).map((language, i) => {
            return (
              <ul key={`key-${i}`} className="language__list">
                <li
                  className="language__list_item"
                  onClick={() => change(language)}
                >
                  {language}
                  <img src={languages[language]} alt="flags" />
                </li>
              </ul>
            );
          })}
        <div className="slider_btn__section">
          <button className="next-button" onClick={prev}>
            <LeftArrow />
          </button>
          <button className="next-button" onClick={next}>
            <RightArrow />
          </button>
        </div>
      </div>
    </>
  );
};
