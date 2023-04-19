import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { LIBRARIES } from "../interfaces/interfaces";
import { GoogleMap } from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type DirectionsResult = google.maps.DirectionsResult;
export const useMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: LIBRARIES,
  });

  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 49.845545, lng: 24.029465 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      mapId: "fc62ab7465fa1af0",
    }),
    []
  );

  const userRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const [directions, setDirections] = useState<DirectionsResult | null>();

  const fetchDirections = () => {
    if (!userRef.current) return;
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: center,
        destination: userRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  const clearDirections = () => {
    if (!userRef.current) return;
    setDirections(null);
    mapRef.current?.panTo(center);
    userRef.current.value = "";
  };

  const backToInitialPosition = () => {
    mapRef.current?.panTo(center);
    (mapRef.current as unknown as google.maps.Map)?.setZoom(15);
  };

  return {
    center,
    isLoaded,
    options,
    fetchDirections,
    userRef,
    directions,
    clearDirections,
    onLoad,
    backToInitialPosition,
  };
};
