import React from "react";
import "./Slider.scss";
import { useSlider } from "./useSlider";
import { LeftArrow, RightArrow } from "../../assets/images/icons/Icons";
import Button from "./Button";

const Slider = () => {
  const [
    {
      framesWithMultiLanguageTitles,
      goToNextFrame,
      goToPrevFrame,
      currentFrame,
      t,
    },
  ] = useSlider();
  return (
    <>
      <div className="container container_btn__section">
        <div className="slider_btn__section">
          <Button role="back" icon={<LeftArrow />} onClick={goToPrevFrame} />
          <button className="buynow__btn">{t("buyButton")}</button>
          <Button
            role="forward"
            icon={<RightArrow />}
            onClick={goToNextFrame}
          />
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

export default Slider;
