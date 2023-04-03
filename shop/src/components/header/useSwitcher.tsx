import React, { useContext } from "react";
import { LanguageContext } from "../../helpers/languageContext";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import {
  setIsLangListShown,
  setLanguageText,
} from ".././reducers/slices/switcherSlice";

function useSwitcher() {
  const dispatch = useAppDispatch();
  const { isLangListShown, languageText } = useAppSelector(
    (state) => state.switcher
  );
  const { t, i18n } = useContext(LanguageContext);

  const showLanguagesList = () => {
    dispatch(setIsLangListShown(!isLangListShown));
  };
  const getLanguageSwitched = (language: string): void => {
    const languageAbbreviation = language.slice(0, 2).toLowerCase();
    i18n.changeLanguage(languageAbbreviation);
    dispatch(setLanguageText(language));
    showLanguagesList();
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
