import React, { useRef, useEffect, useState } from "react";
import { ProductsSchema } from "../../helpers/products";

function useSwiper(products: ProductsSchema[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [px, setPx] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const productsPerSwipe: number = Math.floor(products.length / 3);
  const maxDistance: number = offsetX + px;

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!isDragging) return;
      const x = e.clientX;
      const distance = x - startX;
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
  }, [isDragging, startX, offsetX, px]);

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    setStartX(e.clientX);
    setIsDragging(true);
  };
  const scrollToSelectedPage = (index: number): void => {
    const scrollPixelGap: number = 15;
    const productPerScroll: number =
      (containerRef.current!.children[0].clientWidth + scrollPixelGap) *
      productsPerSwipe;
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
      px,
      offsetX,
      currentPage,
      productsPerSwipe,
      customStyle,
      isDragging,
    },
  ];
}

export default useSwiper;
