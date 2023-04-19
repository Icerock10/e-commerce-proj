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
    directionsResponse,
    destinationRef,
    originRef,
    calculateRoute,
    clearRoute,
    isLoaded,
    address,
  } = useMap();

  if (!isLoaded) {
    return <div>Preload...</div>;
  }

  return (
    <>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
        <MarkerF position={center}>
          <InfoWindow position={center}>
            <div className="huy">{address}</div>
          </InfoWindow>
        </MarkerF>
      </GoogleMap>
      <div className="map__widget">
        <div className="map__widget_item">
          <Autocomplete>
            <input className="origin" ref={originRef} defaultValue={address} />
          </Autocomplete>
          <Autocomplete>
            <input
              className="destination"
              placeholder="destination"
              ref={destinationRef}
            />
          </Autocomplete>
          <button onClick={calculateRoute} className="btn__calculate">
            Calculate
          </button>
          <button onClick={clearRoute}>X</button>
        </div>
        <div className="map__widget_item result">
          <span>Distance </span>
          <span>Duration </span>
          <span>Back</span>
        </div>
      </div>
    </>
  );
};
