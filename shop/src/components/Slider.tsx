import { useState, useEffect } from "react";
import "../styles/style.scss";

import logo from "../assets/images/logo.png";
import ukFlag from "../assets/images/flag-uk.png";
import { images } from "../helpers/images";

import {
  LeftArrow,
  RightArrow,
  Search,
  Menu,
  Cart,
} from "../assets/images/icons/Icons";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = images.length;

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
      <div className="container">
        <div className="container__logo">
          <img src={logo}></img>
        </div>
        <div className="main">
          <span className="main__menu" style={{ color: "#fff" }}>
            <Menu />
          </span>
          <div className="dropdown">
            <button className="btn dropdown__toggle">All Category</button>
          </div>
          <div className="input__group">
            <input
              type="text"
              className="input__group_form"
              placeholder="Search this blog"
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}
              >
                <Search />
              </button>
            </div>
          </div>
          <div className="header__box">
            <div className="header__box_switcher">
              <a className="nav__link" href="/">
                <img src={ukFlag} />
                <span className="nav__link_text">English</span>
              </a>
              <div className="cart">
                <Cart className="cart__icon" />
                CART
              </div>
            </div>
          </div>
        </div>
        <div className="slider_btn__section">
          <button className="next-button" onClick={prevImage}>
            <LeftArrow />
          </button>
          <button className="next-button" onClick={nextImage}>
            <RightArrow />
          </button>
        </div>
      </div>
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
