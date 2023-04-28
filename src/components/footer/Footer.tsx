import './Footer.scss';
import React from 'react';
import { Map } from './Map/Map';
import { useMap } from './Map/useMap';

export const Footer = () => {
  const { isLoaded } = useMap();

  return <footer className='footer'>{!isLoaded ? <div>Loading...</div> : <Map />}</footer>;
};
