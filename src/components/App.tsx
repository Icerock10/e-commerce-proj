import React from 'react';
import { Slider } from './slider/Slider';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '.././helpers/languageContext';
import { Footer } from './footer/Footer';
import { Products } from './products/Products';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <LanguageContext.Provider value={{ t, i18n }}>
      <Slider />
      <Products />
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
