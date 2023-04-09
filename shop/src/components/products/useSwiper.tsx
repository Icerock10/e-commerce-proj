import React, { useRef, useEffect, useState } from "react";
import { ProductFields } from "../interfaces/interfaces";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import {
  resetPixelsAfterNewCategory,
  selectResetPixelsFlag,
} from "../reducers/slices/productsSlice";

function useSwiper(products: ProductFields[]) {
  const flag = useAppSelector(selectResetPixelsFlag);
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const [px, setPx] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pages: number = Math.floor(products.length / 3);

  const scrollToSelectedPage = (index: number): void => {
    const scrollPixelGap: number = 14;
    const productPerScroll: number =
      (containerRef.current!.children[0].clientWidth + scrollPixelGap) * 3;
    setCurrentPage(index);
    setPx(index * -productPerScroll);
  };
  useEffect(() => {
    function setPixelsDependingOnFlag() {
      if (flag) {
        if (products.length < 3) {
          const productPerScroll: number =
            containerRef.current!.children[0].clientWidth / products.length;
          setPx(productPerScroll);
          dispatch(resetPixelsAfterNewCategory(!flag));
          return;
        }
        setCurrentPage(0);
        dispatch(resetPixelsAfterNewCategory(!flag));
        setPx(0);
      }
    }
    setPixelsDependingOnFlag();
  }, [flag, containerRef.current]);

  return [
    {
      scrollToSelectedPage,
      containerRef,
      currentPage,
      pages,
      setPx,
      px,
    },
  ];
}

export default useSwiper;
