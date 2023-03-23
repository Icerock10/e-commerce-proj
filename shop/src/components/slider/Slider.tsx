import { useState, useEffect } from "react";
import "./Slider.scss";
import { frames } from "../../helpers/Frames";
import { HeaderSlider } from "./HeaderSlider";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const { t, i18n } = useTranslation();
  const totalFrames = frames.length;
  const frameTitles: { titles: []; subTitles: [] } = i18n.t("frameTitles", {
    returnObjects: true,
  });
  const { titles, subTitles } = frameTitles;

  const framesWithMultiLanguageTitles = frames.map((frame, index) => ({
    ...frame,
    title: titles[index],
    subTitle: subTitles[index],
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame(currentFrame === totalFrames - 1 ? 0 : currentFrame + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentFrame]);

  const nextImage = () => {
    setCurrentFrame(currentFrame === totalFrames - 1 ? 0 : currentFrame + 1);
  };

  const prevImage = () => {
    setCurrentFrame(currentFrame === 0 ? totalFrames - 1 : currentFrame - 1);
  };

  return (
    <div className="wrapper">
      <HeaderSlider next={nextImage} prev={prevImage} t={t} i18n={i18n} />

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
    </div>
  );
};

export default Slider;
