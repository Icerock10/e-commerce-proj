import React from "react";
import commute from "../.././../assets/images/commute.png";
import near from "../.././../assets/images/near.png";
import { AlarmIcon } from "../../../assets/images/icons/Icons";
import { Button } from "./Button";
import { DistanceProps } from "../../interfaces/interfaces";

export const Distance = ({ leg, getToInitialPos }: DistanceProps) => {
  return (
    <div className="map__widget_item result">
      <div className="result__distance">
        <img src={commute} alt="commute" />
        <span>Distance {leg?.distance?.text}</span>
      </div>
      <div className="result__duration">
        <AlarmIcon />
        <span>Duration: {leg?.duration?.text}</span>
      </div>
      <Button className="borderless" handleButtonClick={getToInitialPos}>
        <img src={near} alt="location" />
      </Button>
    </div>
  );
};
