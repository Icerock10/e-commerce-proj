import React from "react";
import { useMap } from "./useMap";
import {
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
  InfoWindowF,
  Autocomplete,
} from "@react-google-maps/api";
import { Distance } from "./Distance";
import { Close } from "../../.././assets/images/icons/Icons";
import { RoundedButton } from "../../Buttons/RoundedButton";
import { IconButton } from "../../Buttons/IconButton";
export const Map = () => {
  const {
    center,
    options,
    fetchDirections,
    userRef,
    directions,
    clearDirections,
    onLoad,
    backToInitialPosition,
    address,
  } = useMap();

  return (
    <>
      <GoogleMap
        center={center}
        zoom={6}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={options}
        onLoad={onLoad}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{ polylineOptions: { strokeColor: "#f26522" } }}
          />
        )}
        <MarkerF position={center}>
          <InfoWindowF position={center}>
            <div>{address}</div>
          </InfoWindowF>
        </MarkerF>
      </GoogleMap>
      <div className="map__widget">
        <div className="map__widget_item">
          <Autocomplete>
            <input
              className="destination"
              placeholder="Pick your location"
              ref={userRef}
            />
          </Autocomplete>
          <RoundedButton
            handleClick={fetchDirections}
            className="btn__calculate"
          >
            Calculate
          </RoundedButton>
          <IconButton className="borderless" handleClick={clearDirections}>
            <Close />
          </IconButton>
        </div>
        <Distance
          leg={directions?.routes[0].legs[0]}
          getToInitialPos={backToInitialPosition}
        />
      </div>
    </>
  );
};
