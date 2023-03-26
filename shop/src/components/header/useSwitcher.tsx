import React, { useState, useContext } from "react";
import { LanguageContext } from "../../helpers/languageContext";

function useSwitcher() {
  const currentLanguage: string | null = localStorage.getItem("i18nextLng");
  const [isLangListShown, setIsLangListShown] = useState<boolean>(false);
  const [languageText, setlanguageText] = useState<string>(() =>
    currentLanguage === "fr" ? "French" : "English"
  );
  const { t, i18n } = useContext(LanguageContext);

  const showLanguagesList = () => {
    setIsLangListShown(!isLangListShown);
  };
  const getLanguageSwitched = (language: string): void => {
    const languageAbbreviation = language.slice(0, 2).toLowerCase();
    i18n.changeLanguage(languageAbbreviation);
    setlanguageText(language);
    setIsLangListShown(!isLangListShown);
  };
  return [
    {
      showLanguagesList,
      languageText,
      isLangListShown,
      getLanguageSwitched,
      t,
    },
  ];
}

export default useSwitcher;
