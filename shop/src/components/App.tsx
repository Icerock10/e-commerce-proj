import React from "react";
import Slider from "./slider/Slider";
import { Header } from "./header/Header";
import { useTranslation } from "react-i18next";
import { LanguageContext } from ".././helpers/languageContext";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <LanguageContext.Provider value={{ t, i18n }}>
      <Header />
      <Slider />
    </LanguageContext.Provider>
  );
}

export default App;
