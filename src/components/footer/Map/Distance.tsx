import React from "react";
import commute from "../../../assets/images/commute.png";
import near from "../../../assets/images/near.png";
import { AlarmIcon } from "../../../assets/images/icons/Icons";
import { DistanceProps } from "../../interfaces/interfaces";
import { IconButton } from "../../Buttons/IconButton";
import { useVisibility } from "../../commonHooks/useVisibility";

export const Distance = ({ leg, getToInitialPos }: DistanceProps) => {
  const { isMapWidgetTextShown } = useVisibility();
  return (
    <div className="map__widget_item result">
      <div className="result__distance">
        <img src={commute} alt="commute" />
        <span>
          {isMapWidgetTextShown && "Distance:"} {leg?.distance?.text}
        </span>
      </div>
      <div className="result__duration">
        <AlarmIcon />
        <span>
          {isMapWidgetTextShown && "Duration:"} {leg?.duration?.text}
        </span>
        <div className="btn__nav">
          <IconButton className="borderless" handleClick={getToInitialPos}>
            <img src={near} alt="location" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
