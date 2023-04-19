import "./Footer.scss";
import React from "react";
import { Map } from "./Map";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__content"></div>
      <div className="footer__map">
        <Map />
      </div>
    </footer>
  );
};
