import "./Footer.scss";
import React from "react";
import { Map } from "./Map/Map";
import { useMap } from "./Map/useMap";

export const Footer = () => {
  const { isLoaded } = useMap();

  return (
    <footer>
      <div className="footer__map">
        {!isLoaded ? <div>Loading...</div> : <Map />}
      </div>
    </footer>
  );
};
