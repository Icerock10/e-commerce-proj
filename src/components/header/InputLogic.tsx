import React from "react";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { sortByKeyWords, getUserValue } from "../reducers/slices/productsSlice";
import { useScroll } from "../commonHooks/useScroll";

export const InputLogic = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.products);
  const { scrollToSection } = useScroll();

  const sortProductsByUserInput = (): void => {
    dispatch(sortByKeyWords({ value: value, flag: true }));
    scrollToSection(1);
  };
  return {
    dispatch,
    value,
    getUserValue,
    sortProductsByUserInput,
  };
};
