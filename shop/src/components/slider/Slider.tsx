import { useState, useEffect } from "react";
import "./Slider.scss";
import { images } from "../../helpers/images";
import { HeaderSlider } from "./HeaderSlider";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t, i18n } = useTranslation();
  const totalImages = images.length;
  const getLangChanged = images.map((item) => {
    if (item.title) {
      item.title = t("title");
    }
    return item;
  });
  console.log(getLangChanged);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage === totalImages - 1 ? 0 : currentImage + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage(currentImage === totalImages - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? totalImages - 1 : currentImage - 1);
  };

  return (
    <div className="wrapper">
      <HeaderSlider next={nextImage} prev={prevImage} t={t} i18n={i18n} />

      {images.map(({ id, image, title, subTitle }, index) => (
        <div key={id}>
          <div className="banner__text">
            <h1 className="banner__text_title">
              <span>{index === currentImage && title}</span>
              {index === currentImage && subTitle}
            </h1>
          </div>
          <div
            className={`slider ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
