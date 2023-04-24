import React from 'react';
import { useAppDispatch, useAppSelector } from '../globalHooks/reduxHooks';
import { sortByKeyWords, getUserValue, resetSearch } from '../reducers/slices/productsSlice';
import { useScroll } from '../globalHooks/useScroll';

export const InputLogic = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.products);
  const { scrollToSection } = useScroll();

  const sortProductsByUserInput = (): void => {
    dispatch(sortByKeyWords({ value: value, flag: true }));
    if (window.innerWidth < 640) return;
    scrollToSection(1, null);
  };
  const resetSortProducts = () => {
    dispatch(resetSearch());
  };
  return {
    dispatch,
    value,
    getUserValue,
    sortProductsByUserInput,
    resetSortProducts,
  };
};
