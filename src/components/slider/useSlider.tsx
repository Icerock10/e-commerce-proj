import React, { useLayoutEffect, useContext, useCallback } from 'react';
import { frames } from '../../mocks/frames';
import { LanguageContext } from '../../helpers/languageContext';
import { useAppSelector, useAppDispatch } from '../globalHooks/reduxHooks';
import { getFramesAsync, getCurrentFrame } from '../reducers/slices/frameSlice';
import { getJSONParsed } from '../../helpers/jsonParser';

export const useSlider = () => {
  const currentFrame = useAppSelector(getCurrentFrame);
  const dispatch = useAppDispatch();
  const { t } = useContext(LanguageContext);
  const totalFrames: number = frames.length;

  const { titles, subTitles } = getJSONParsed(
    t('frameTitles', {
      returnObjects: true,
    })
  );

  const framesWithMultiLanguageTitles = frames.map((frame, index) => ({
    ...frame,
    title: titles[index],
    subTitle: subTitles[index],
  }));

  const goToNextFrame = useCallback((): void => {
    dispatch(getFramesAsync(totalFrames, 'next'));
  }, [dispatch, totalFrames]);

  const goToPrevFrame = (): void => {
    dispatch(getFramesAsync(totalFrames, 'prev'));
  };
  useLayoutEffect(() => {
    const framesInterval = setInterval(() => {
      goToNextFrame();
    }, 3000);
    return (): void => clearInterval(framesInterval);
  }, [currentFrame, goToNextFrame]);

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
