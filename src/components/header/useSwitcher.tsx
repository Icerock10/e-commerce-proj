import React, { useContext } from "react";
import { LanguageContext } from "../../helpers/languageContext";
import { useAppSelector, useAppDispatch } from "../globalHooks/reduxHooks";
import {
  changeLanguage,
  getLanguageText,
} from ".././reducers/slices/switcherSlice";
import { getProductsInCartLength } from "../reducers/slices/cartSlice";
import { useVisibility } from "../globalHooks/useVisibility";

export const useSwitcher = () => {
  const { showLanguagesList, isLangListShown } = useVisibility();
  const { t, i18n } = useContext(LanguageContext);
  const languageText = useAppSelector(getLanguageText);
  const productsLength = useAppSelector(getProductsInCartLength);
  const dispatch = useAppDispatch();

  const getLanguageSwitched = (language: string): void => {
    const languageAbbreviation = language.slice(0, 2).toLowerCase();
    i18n.changeLanguage(languageAbbreviation);
    dispatch(changeLanguage(language));
    showLanguagesList();
  };
  return {
    showLanguagesList,
    languageText,
    isLangListShown,
    getLanguageSwitched,
    t,
    productsLength,
  };
};
