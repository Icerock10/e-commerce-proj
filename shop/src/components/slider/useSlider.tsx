import React, { useEffect, useContext } from "react";
import { frames } from "../../mocks/frames";
import { LanguageContext } from "../../helpers/languageContext";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { getFramesAsync, getCurrentFrame } from "../reducers/slices/frameSlice";
import { getJSONParsed } from "../../helpers/jsonParser";

export const useSlider = () => {
  const currentFrame = useAppSelector(getCurrentFrame);
  const dispatch = useAppDispatch();
  const { t } = useContext(LanguageContext);
  const totalFrames: number = frames.length;

  const { titles, subTitles } = getJSONParsed(
    t("frameTitles", {
      returnObjects: true,
    })
  );

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
      t,
    },
  ];
};
