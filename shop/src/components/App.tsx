import React from "react";
import Slider from "./slider/Slider";
import { Header } from "./header/Header";
import { useTranslation } from "react-i18next";
import { LanguageContext } from ".././helpers/languageContext";
import Products from "./products/Products";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <LanguageContext.Provider value={{ t, i18n }}>
      <Header />
      <Slider />
      <Products />
    </LanguageContext.Provider>
  );
}

export default App;
