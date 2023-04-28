import React from 'react';
import './Slider.scss';
import { useSlider } from './useSlider';
import { LeftArrow, RightArrow } from '../../assets/images/icons/Icons';
import { useVisibility } from '../globalHooks/useVisibility';
import { ArrowButton } from '../Buttons/ArrowButton';
import { sliderClasses } from '../classUtils/classUtils';
import { RoundedButton } from '../Buttons/RoundedButton';
import { ButtonRoles } from '../../enums/buttonRoles';
import { Header } from '../header/Header';
export const Slider = () => {
  const [{ framesWithMultiLanguageTitles, goToNextFrame, goToPrevFrame, currentFrame, t }] =
    useSlider();
  const { toggleCartVisibility, togglePopUpVisibility } = useVisibility();
  return (
    <div className='wrapper'>
      <Header />
      {framesWithMultiLanguageTitles.map(({ id, image, subTitle, title }, index) => (
        <React.Fragment key={id}>
          <div className={sliderClasses(index, currentFrame)}>
            <img src={image} width='100%' height='100%' alt='slider' />
          </div>
          <article className='heading'>
            <h1 className='heading__title'>{index === currentFrame && title}</h1>
            <h1 className='heading__subtitle'>{index === currentFrame && subTitle}</h1>
          </article>
        </React.Fragment>
      ))}
      <div className='container'>
        <div className='slider-control'>
          <ArrowButton
            className='slider-control__arrow-btn'
            role={ButtonRoles.BACK}
            handleClick={goToPrevFrame}
          >
            <LeftArrow />
          </ArrowButton>
          <ArrowButton
            className='slider-control__arrow-btn'
            role={ButtonRoles.FORWARD}
            handleClick={goToNextFrame}
          >
            <RightArrow />
          </ArrowButton>
        </div>
        <RoundedButton
          handleClick={toggleCartVisibility}
          togglePopUp={togglePopUpVisibility}
          className='buy-btn'
          role={ButtonRoles.BUY_BUTTON}
        >
          {t('buyButton')}
        </RoundedButton>
      </div>
    </div>
  );
};
