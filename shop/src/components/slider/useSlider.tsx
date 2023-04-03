import React, { useEffect, useContext } from "react";
import { frames } from "../../helpers/frames";
import { LanguageContext } from "../../helpers/languageContext";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { getFramesAsync, getCurrentFrame } from "../reducers/slices/frameSlice";

export const useSlider = () => {
  const currentFrame = useAppSelector(getCurrentFrame);
  const dispatch = useAppDispatch();

  const { t } = useContext(LanguageContext);
  const totalFrames: number = frames.length;
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
  const goToNextFrame = (): void => {
    dispatch(getFramesAsync(totalFrames, "next"));
  };
  const goToPrevFrame = (): void => {
    dispatch(getFramesAsync(totalFrames, "prev"));
  };
  useEffect(() => {
    const framesInterval = setInterval(() => {
      goToNextFrame();
    }, 3000);
    return (): void => clearInterval(framesInterval);
  }, [currentFrame]);

  return [
    {
      framesWithMultiLanguageTitles,
      goToNextFrame,
      goToPrevFrame,
      currentFrame,
    },
  ];
};
