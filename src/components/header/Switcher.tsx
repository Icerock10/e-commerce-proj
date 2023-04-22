import React from "react";
import { languages } from "../../helpers/languages";
import { CartIcon } from "../../assets/images/icons/Icons";
import { useSwitcher } from "./useSwitcher";
import { useCart } from "./Cart/useCart";
import { useClickOutside } from "../globalHooks/useClickOutside";
import { useVisibility } from "../globalHooks/useVisibility";
import { languageListClasses } from "../classUtils/classUtils";

export const Switcher = () => {
  const {
    showLanguagesList,
    languageText,
    isLangListShown,
    getLanguageSwitched,
    t,
    productsLength,
  } = useSwitcher();
  const { toggleCartVisibility } = useCart();
  const { togglePopUpVisibility, isPopupShown } = useVisibility();
  const { switcherRef } = useClickOutside();

  return (
    <div className="header__box">
      <div className="header__box_switcher">
        <div className="switcher__group">
          <span onClick={() => showLanguagesList()} className="lang">
            <img
              style={{ height: "0.6rem" }}
              alt="switcher"
              src={languages[languageText]}
            />
            <span className="lang_text">{languageText}</span>
          </span>
          {isLangListShown && (
            <div className="switcher__group_wrapper" ref={switcherRef}>
              {Object.keys(languages).map((language, i) => {
                return (
                  <span
                    key={`key-${i}`}
                    className={languageListClasses(language, languageText)}
                    onClick={() => getLanguageSwitched(language)}
                  >
                    <img
                      src={languages[language]}
                      alt="flags"
                      style={{ height: "0.6rem" }}
                    />
                    {language}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <div
          className="cart"
          onClick={toggleCartVisibility}
          onMouseEnter={togglePopUpVisibility}
          onMouseLeave={togglePopUpVisibility}
        >
          <div className={`${isPopupShown ? "popup" : "hidden"}`}>
            <span>The cart is empty...</span>
          </div>
          <CartIcon className="cart__icon" />
          {productsLength ? (
            <span className="cart__number">{productsLength}</span>
          ) : null}
          <span className="cart__text">{t("cart")}</span>
        </div>
      </div>
    </div>
  );
};
