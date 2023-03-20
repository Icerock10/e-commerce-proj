import { useState, useEffect } from "react";
import "../styles/style.scss";
import banner from "../assets/images/banner.png";
import jackets from "../assets/images/jackets.png";
import star from "../assets/images/star.png";
import logo from "../assets/images/icons/logo.png";
import menu from "../assets/images/icons/menu.png";
import search from "../assets/images/icons/search.png";
import ukFlag from "../assets/images/icons/flag-uk.png";
import cart from "../assets/images/icons/cart.png";
import leftArrow from "../assets/images/icons/left_arrow.png";
import rightArrow from "../assets/images/icons/right_arrow.png";

const images = [
  {
    id: 1,
    image: `${banner}`,
    title: "Get start",
    subTitle: "Your favorite shopping",
  },
  {
    id: 2,
    image: `${jackets}`,
    title: "",
    subTitle: "Great deals are waiting",
  },
  {
    id: 3,
    image: `${star}`,
    title: "",
    subTitle: "your favorite shopping",
  },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = images.length;

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
          <span className="main__menu">
            <img src={menu}></img>
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
                <img src={search} />
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
                <img src={cart} style={{ marginRight: "15px" }} />
                CART
              </div>
            </div>
          </div>
        </div>
        <div className="slider_btn__section">
          <button className="next-button" onClick={prevImage}>
            <img src={leftArrow} alt="" />
          </button>
          <button className="next-button" onClick={nextImage}>
            <img src={rightArrow} alt="" />
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
