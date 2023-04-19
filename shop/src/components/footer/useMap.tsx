import React, { useRef, useState, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { LIBRARIES } from "../interfaces/interfaces";

export const useMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: LIBRARIES,
  });

  const center = { lat: 49.845545, lng: 24.029465 };
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [address, setAddress] = useState<any>(null);
  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      const latLng = center;
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK") {
          if (results && results[0]) {
            const address = results[0].formatted_address;
            setAddress(address);
          }
        }
      });
    }
  }, [center, isLoaded]);

  const calculateRoute = async () => {
    if (!originRef.current || !destinationRef.current) return;
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: address,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  };

  const clearRoute = () => {
    if (!originRef.current || !destinationRef.current) {
      return;
    }
    originRef.current.value = "";
    destinationRef.current.value = "";
    setDirectionsResponse(null);
  };
  return {
    center,
    directionsResponse,
    destinationRef,
    originRef,
    calculateRoute,
    clearRoute,
    isLoaded,
    address,
  };
};
