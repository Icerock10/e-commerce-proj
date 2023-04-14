import React from "react";
import { useAppDispatch } from "../reducers/hooks";
import { toggleVisibility } from "../reducers/slices/visibilitySlice";

export const useVisibility = () => {
  const dispatch = useAppDispatch();
  const showLanguagesList = () => {
    dispatch(toggleVisibility("isLangListShown"));
  };
  return {
    showLanguagesList,
  };
};
