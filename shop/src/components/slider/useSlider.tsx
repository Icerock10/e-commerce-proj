import React, { useState, useEffect, useContext } from "react";
import { frames } from "../../helpers/frames";
import { LanguageContext } from "../../helpers/languageContext";

export const useSlider = () => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const { t } = useContext(LanguageContext);
  const totalFrames = frames.length;
  interface FrameTitles {
    titles: string[];
    subTitles: string[];
  }
  const frameTitles = t("frameTitles", {
    returnObjects: true,
  });
  const typedFrameTitles = frameTitles as unknown as FrameTitles;
  const { titles, subTitles } = typedFrameTitles;

  const framesWithMultiLanguageTitles = frames.map((frame, index) => ({
    ...frame,
    title: titles[index],
    subTitle: subTitles[index],
  }));
  useEffect(() => {
    const framesInterval = setInterval(() => {
      setCurrentFrame(currentFrame === totalFrames - 1 ? 0 : currentFrame + 1);
    }, 3000);
    return (): void => clearInterval(framesInterval);
  }, [currentFrame]);

  const nextFrame = (): void => {
    setCurrentFrame(currentFrame === totalFrames - 1 ? 0 : currentFrame + 1);
  };

  const prevFrame = (): void => {
    setCurrentFrame(currentFrame === 0 ? totalFrames - 1 : currentFrame - 1);
  };

  return [
    { framesWithMultiLanguageTitles, nextFrame, prevFrame, currentFrame },
  ];
};
