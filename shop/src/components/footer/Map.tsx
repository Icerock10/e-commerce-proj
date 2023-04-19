import React from "react";
import { useMap } from "./useMap";
import {
  useJsApiLoader,
  InfoWindow,
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";

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
  } = useMap();

  return (
    <>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={options}
        onLoad={onLoad}
      >
        {directions && <DirectionsRenderer directions={directions} />}
        <MarkerF position={center}></MarkerF>
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
          <button onClick={fetchDirections} className="btn__calculate">
            Calculate
          </button>
          <button onClick={clearDirections}>X</button>
        </div>
        <div className="map__widget_item result">
          <span>Distance </span>
          <span>Duration </span>
          <span onClick={backToInitialPosition}>Back</span>
        </div>
      </div>
    </>
  );
};
