import React, { useRef, useEffect, useState } from "react";
import { ProductFields } from "../../helpers/products";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import {
  resetPixelsAfterDragg,
  selectResetPixelsFlag,
} from "../reducers/slices/productsSlice";

function useSwiper(products: ProductFields[]) {
  const flag = useAppSelector(selectResetPixelsFlag);
  const dispatch = useAppDispatch();

  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [px, setPx] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pages: number = Math.floor(products.length / 3);
  const maxDistance: number = offsetX + px;

  useEffect(() => {
    if (flag) {
      setCurrentPage(0);
      dispatch(resetPixelsAfterDragg(!flag));
      setPx(0);
      return;
    }
    const handleMouseMove = ({ clientX }: any) => {
      if (!isDragging) return;
      const distance = clientX - startX;
      setOffsetX(distance * 2);
    };

    const handleMouseUp = () => {
      const elemWidth: number = containerRef.current!.children[0].clientWidth;
      const containerWidth: number = containerRef.current!.offsetWidth;
      const totalElemWidth: number = elemWidth * products.length;
      const remainingSpace: number = containerWidth - totalElemWidth;
      const pixelGap: number = 150;

      if (maxDistance > 18) {
        setIsDragging(false);
        setOffsetX(0);
        setPx(0);
        return;
      }
      if (maxDistance < remainingSpace) {
        setIsDragging(false);
        setOffsetX(0);
        setPx(remainingSpace - pixelGap);
        return;
      }
      setIsDragging(false);
      setPx((prev) => prev + offsetX);
      setOffsetX(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, offsetX, px, flag]);

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    setStartX(e.clientX);
    setIsDragging(true);
  };
  const scrollToSelectedPage = (index: number): void => {
    const scrollPixelGap: number = 14;
    const productPerScroll: number =
      (containerRef.current!.children[0].clientWidth + scrollPixelGap) * 3;
    setCurrentPage(index);
    setPx(index * -productPerScroll);
  };

  const customStyle = {
    transform: `translate3d(${px + offsetX}px, 0px, 0px)`,
  };

  return [
    {
      scrollToSelectedPage,
      handleMouseDown,
      containerRef,
      currentPage,
      pages,
      customStyle,
      isDragging,
      setPx,
    },
  ];
}

export default useSwiper;
