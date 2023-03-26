import React from "react";
import { languages } from "../../helpers/languages";
import { Cart } from "../../assets/images/icons/Icons";
import useSwitcher from "./useSwitcher";

function Switcher() {
  const [
    {
      showLanguagesList,
      languageText,
      isLangListShown,
      getLanguageSwitched,
      t,
    },
  ] = useSwitcher();

  return (
    <div className="header__box">
      <div className="header__box_switcher">
        <div className="switcher__group">
          <span onClick={showLanguagesList} className="lang">
            <img src={languages[languageText]} />
            <span className="lang_text">{languageText}</span>
          </span>
          {isLangListShown && (
            <div className="switcher__group_wrapper">
              {Object.keys(languages).map((language, i) => {
                return (
                  <span
                    key={`key-${i}`}
                    className={`language__list_item ${
                      languageText === language && "selected"
                    }`}
                    onClick={() => getLanguageSwitched(language)}
                  >
                    <img src={languages[language]} alt="flags" />
                    {language}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <div className="cart">
          <Cart className="cart__icon" />
          <span className="cart__text">{t("cart")}</span>
        </div>
      </div>
    </div>
  );
}

export default Switcher;
