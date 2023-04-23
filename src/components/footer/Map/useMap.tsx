import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { LIBRARIES } from '../../../interfaces/interfaces';
import { GoogleMap } from '@react-google-maps/api';
import { DirectionsResult, LatLngLiteral, MapOptions } from '../../../interfaces/interfaces';
import { useVisibility } from '../../globalHooks/useVisibility';

export const useMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: LIBRARIES,
    language: 'en-US',
  });
  const { toggleWidgetText } = useVisibility();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 49.845545, lng: 24.029465 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      mapId: 'fc62ab7465fa1af0',
    }),
    []
  );
  const [directions, setDirections] = useState<DirectionsResult | null>();
  const [address, setAddress] = useState<string>('');
  const userRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

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
        if (status === 'OK' && result) {
          setDirections(result);
          toggleWidgetText();
        }
      }
    );
  };

  const clearDirections = () => {
    if (!userRef.current) return;
    setDirections(null);
    toggleWidgetText();
    mapRef.current?.panTo(center);
    userRef.current.value = '';
  };

  const backToInitialPosition = () => {
    mapRef.current?.panTo(center);
    (mapRef.current as unknown as google.maps.Map)?.setZoom(15);
  };

  const getAddressFromLatLng = async (latLng: LatLngLiteral) => {
    const geocoder = new google.maps.Geocoder();
    const result = await new Promise((resolve, reject) => {
      geocoder.geocode({ location: latLng, language: 'en' }, (results, status) => {
        if (status === 'OK' && results?.length) {
          resolve(results[0].formatted_address);
        } else {
          reject(status);
        }
      });
    });
    setAddress(result as string);
  };

  useEffect(() => {
    if (isLoaded) {
      getAddressFromLatLng(center);
    }
  }, [isLoaded, center]);

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
    address,
  };
};
