import "./Footer.scss";
import React from "react";
import { Map } from "./Map";
import { useMap } from "./useMap";

export const Footer = () => {
  const { isLoaded } = useMap();

  return (
    <footer>
      <div className="footer__content"></div>
      <div className="footer__map">
        {!isLoaded ? <div>Loading...</div> : <Map />}
      </div>
    </footer>
  );
};
