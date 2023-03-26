import React from "react";
import "./Slider.scss";
import { useSlider } from "./useSlider";
import { LeftArrow, RightArrow } from "../../assets/images/icons/Icons";

const Slider = () => {
  const [
    { framesWithMultiLanguageTitles, nextFrame, prevFrame, currentFrame },
  ] = useSlider();

  return (
    <>
      <div className="container container_btn__section">
        <div className="slider_btn__section">
          <button className="slider__btn" onClick={prevFrame}>
            <LeftArrow />
          </button>
          <button className="buynow__btn">Buy Now</button>
          <button className="slider__btn" onClick={nextFrame}>
            <RightArrow />
          </button>
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
