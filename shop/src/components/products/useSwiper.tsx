import React, { useRef, useEffect, useState } from "react";
import { products } from "../../helpers/products";

function useSwiper() {
  const containerRef = useRef<HTMLElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [px, setPx] = useState<number>(0);
  const step: number = Math.floor(products.length / 3);
  const maxDistance: number = offsetX + px;

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (!isDragging) return;
      const x = event.clientX;
      const distance = x - startX;
      setOffsetX(distance * 2);
    };

    const handleMouseUp = () => {
      const elemWidth: any = containerRef.current!.children[0];
      const containerWidth = containerRef.current!.offsetWidth;
      const totalElemWidth = elemWidth * products.length;
      let remainingSpace = containerWidth - totalElemWidth;

      if (maxDistance > 18) {
        setIsDragging(false);
        setOffsetX(0);
        setPx(0);
        return;
      }
      if (maxDistance < remainingSpace) {
        setIsDragging(false);
        setOffsetX(0);
        setPx(remainingSpace - 150); //gaps
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

  const handleMouseDown = (event: any) => {
    event.preventDefault();
    setStartX(event.clientX);
    setIsDragging(true);
  };
  //   const handleNext = (index: number): void => {
  // 	const itemsPerScroll = (containerRef.current.lastChild.offsetWidth + 15) * step;
  // 	setPx(index * -itemsPerScroll)
  //   }
}

export default useSwiper;
