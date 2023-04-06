import React, { useContext } from "react";
import { LanguageContext } from "../../helpers/languageContext";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import {
  changeLanguage,
  getLanguageText,
} from ".././reducers/slices/switcherSlice";
import {
  getVisibilityState,
  toggleVisibility,
} from ".././reducers/slices/visibilitySlice";

function useSwitcher() {
  const { isLangListShown } = useAppSelector(getVisibilityState);
  const languageText = useAppSelector(getLanguageText);
  const dispatch = useAppDispatch();
  const { t, i18n } = useContext(LanguageContext);

  const showLanguagesList = () => {
    dispatch(toggleVisibility("isLangListShown"));
  };
  const getLanguageSwitched = (language: string): void => {
    const languageAbbreviation = language.slice(0, 2).toLowerCase();
    i18n.changeLanguage(languageAbbreviation);
    dispatch(changeLanguage(language));
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
