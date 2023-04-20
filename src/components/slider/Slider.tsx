import React from "react";
import "./Slider.scss";
import { useSlider } from "./useSlider";
import { LeftArrow, RightArrow } from "../../assets/images/icons/Icons";
import { useVisibility } from "../commonHooks/useVisibility";
import { ArrowButton } from "../Buttons/ArrowButton";
import { RoundedButton } from "../Buttons/RoundedButton";
import { ButtonRoles } from "../../enums/buttonRoles";
export const Slider = () => {
  const [
    {
      framesWithMultiLanguageTitles,
      goToNextFrame,
      goToPrevFrame,
      currentFrame,
      t,
    },
  ] = useSlider();
  const { toggleCartVisibility, togglePopUpVisibility } = useVisibility();
  return (
    <>
      <div className="container container_btn__section">
        <div className="slider_btn__section">
          <ArrowButton
            className="slider__btn"
            role={ButtonRoles.BACK}
            handleClick={goToPrevFrame}
          >
            <LeftArrow />
          </ArrowButton>
          <RoundedButton
            handleClick={toggleCartVisibility}
            togglePopUp={togglePopUpVisibility}
            className="buynow__btn"
            role={ButtonRoles.BUY_BUTTON}
          >
            {t("buyButton")}
          </RoundedButton>
          <ArrowButton
            className="slider__btn"
            role={ButtonRoles.FORWARD}
            handleClick={goToNextFrame}
          >
            <RightArrow />
          </ArrowButton>
        </div>
      </div>
      {framesWithMultiLanguageTitles.map(
        ({ id, image, subTitle, title }, index) => (
          <div key={id}>
            <div className="banner__text">
              <h1 className="banner__text_title">
                <span>{index === currentFrame && title}</span>
                {index === currentFrame && subTitle}
              </h1>
            </div>
            <div
              className={`slider ${index === currentFrame ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        )
      )}
    </>
  );
};
